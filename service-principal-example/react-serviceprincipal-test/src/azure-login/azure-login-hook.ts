// Azure authentication dependency
import {
  InteractiveBrowserCredential,
} from "@azure/identity"
import { Subscription, SubscriptionClient } from "@azure/arm-subscriptions"
import { useCallback, useEffect, useState } from "react"
// Acquire credential
const tokenCredential = new InteractiveBrowserCredential({
    tenantId: import.meta.env.VITE_AZURE_TENANT_ID,
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
    loginStyle: 'redirect',
    redirectUri: 'http://localhost:5173',
})

export function useAppHook() {
  const [subscriptionDetails, setSubscriptions] = useState<Subscription[]>([])

  const listSubscriptions = useCallback(async () => {
    try {
      // use credential to authenticate with Azure SDKs
      const client = new SubscriptionClient(tokenCredential)

      // get details of each subscription
      for await (const item of client.subscriptions.list()) {
        const subscriptionDetails = await client.subscriptions.get(
          item.subscriptionId!,
        )

        setSubscriptions((prevState) => {
          return [...prevState, subscriptionDetails]
        })
        /* 
          Each item looks like:
        
          {
            id: '/subscriptions/123456',
            subscriptionId: '123456',
            displayName: 'YOUR-SUBSCRIPTION-NAME',
            state: 'Enabled',
            subscriptionPolicies: {
              locationPlacementId: 'Internal_2014-09-01',
              quotaId: 'Internal_2014-09-01',
              spendingLimit: 'Off'
            },
            authorizationSource: 'RoleBased'
          },
      */
        console.log(subscriptionDetails)
      }
    } catch (err) {
      console.error(JSON.stringify(err))
    }
  }, [])

  useEffect(() => {
    console.log("use azure login hook called")
    listSubscriptions()
  }, [])

  return {
    subscriptionDetails,
  }
}

// async function listSubscriptions() {
//   try {

//     // use credential to authenticate with Azure SDKs
//     const client = new SubscriptionClient(tokenCredential);

//     // get details of each subscription
//     for await (const item of client.subscriptions.list()) {
//       const subscriptionDetails = await client.subscriptions.get(item.subscriptionId!);
//       /*
//         Each item looks like:

//         {
//           id: '/subscriptions/123456',
//           subscriptionId: '123456',
//           displayName: 'YOUR-SUBSCRIPTION-NAME',
//           state: 'Enabled',
//           subscriptionPolicies: {
//             locationPlacementId: 'Internal_2014-09-01',
//             quotaId: 'Internal_2014-09-01',
//             spendingLimit: 'Off'
//           },
//           authorizationSource: 'RoleBased'
//         },
//     */
//       console.log(subscriptionDetails);
//     }
//   } catch (err) {
//     console.error(JSON.stringify(err));
//   }
// }

// listSubscriptions()
//   .then(() => {
//     console.log("done");
//   })
//   .catch((ex) => {
//     console.log(ex);
//   });

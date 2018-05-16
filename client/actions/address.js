// import request from 'superagent'

// import {showError} from './error'
// import baseUrl from '../lib/base-url'

// export const RECEIVE_ADDRESS = 'RECEIVE_ADDRESS'

// export function getAddress (address) {
//   return (dispatch) => {
//     request
//       .post(`${baseUrl}/api/v1/address`)
//       .send(address)
//       .then(res => {
//         dispatch(receiveAddress(res.body))
//       })
//       .catch(() => {
//         dispatch(showError('An unexpected error in getting information'))
//       })
//   }
// }

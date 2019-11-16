import HelperMethods from 'Helpers/Methods';
import {AsyncStorage,Platform} from 'react-native'

export const getTips = function(promise) {
  return new Promise(function(resolve, reject) {
    HelperMethods.makeNetworkCall(`https://api.jsonbin.io/b/5dd00946ad0335638b11c607/latest`,{},(resp, isError) => {
        if (!isError) {
          resolve(resp)
        } else {
          reject(true);
        }
      },
      'GET'
    );
  });
};




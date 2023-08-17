import axios from 'axios';

const API =  {
    async getWalletBalance(user_id) {
        return await axios.post('https://api.ayazona.com/v2/customers/myBalance',
        {
            user_id
        })
        .then(({data})=> data.msg)
        .catch(err=> {
           console.log('Error ::', err);
           return [];
           // TODO: handle error
        });
    },
    async getTopupHistory(user_id) {
        return await axios.post('https://api.ayazona.com/v2/customers/showWalletHistory',
        {
            user_id
        })
       .then(({data})=> {
           if (!!data.msg && data.msg.length) {
               return data.msg.map(({LoadMoney})=>LoadMoney)
           }
           return []
        })
        .catch(err=> {
           console.log('Error ::', err);
           return [];
           // TODO: handle error
        });
    },
    async topupWallet(payload) {
        return await axios.post(
            'https://api.ayazona.com/v2/customers/loadMoneyIntoWallet',
            payload
        )
       .then(({data})=> {
           if(!!data.msg) {
               return data.msg
            }
            throw new Error();
       })
        .catch(err=> {
           console.log('Error ::', err);
           return [];
           // TODO: handle error
        });
    },
    async getFavorites(payload) {
        return await axios.post('https://api.ayazona.com/v2/customers/showFavouriteAisles',
        {
            status: 1,
            ...payload}
       )
       .then(({data})=> !!data.msg ? data.msg.map(({Aisle})=> Aisle): [])
        .catch(err=> {
           console.log('Error ::', err);
           return [];
           // TODO: handle error
        });
    },
    async addFavorite(payload) {
        return await axios.post('https://api.ayazona.com/v2/customers/addFavouriteAisle',
        payload
       )
       .then(({data})=> data.msg[0])
        .catch(err=> {
           console.log('Error ::', err);
           return [];
           // TODO: handle error
        });
    },
    async addAddress(location) {
        return await axios.post('https://api.ayazona.com/v2/customers/addDeliveryAddress',
        {...{
            "long": "long",
            "state": "", 
            "lat": "lat",
            "apartment": "", 
            "instruction": "", 
            "country": "Kenya", 
            "user_id": "user_id", 
            "street": "", 
            "city": "", 
            "default": "1", 
            "zip": ""
        }, ...location})
       .then(({data})=> data.msg[0])
       .catch(err=> {
           console.log('Error ::', err);
           return [];
           // TODO: handle error
        });
    },
    async uploadImage(data) {
        return await axios.post('https://api.ayazona.com/v2/customers/addUserImage', data
            )
            .then(res=>{
                // TODO: refetch user data to update uploded image redux state
            })
            .catch(err=>{
            })
    },
    async getAddresses(user_id) {
        return await axios.post('https://api.ayazona.com/v2/customers/showDeliveryAddresses',
        {
            status: "1",
            user_id
        })
        .then(({data})=> data.msg)
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
         });
    },
    async getDeliveryFee(payload) {
        return await axios.post('https://api.ayazona.com/v2/customers/showDeliveryAddresses',
        payload)
        .then(({data})=> data.msg)
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
         });
    },
    async deleteAddress(user_id, address_id) {
        return await axios.post('https://api.ayazona.com/v2/customers/addDeliveryAddress', {
            user_id,
            id: address_id
        })
        .then(({data})=> data)
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
         });
    },
    async updatePassword(old_password, new_password, user_id) {
        return await axios.post('https://api.ayazona.com/v2/customers/changePassword', {
            old_password,
            new_password,
            user_id
        })
        .then(({data})=> data.msg[0])
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
         });
    },
    async resetPassword(email) {
        return await axios.post('https://api.ayazona.com/v2/customers/forgotPassword',
        {
            email
        })
        .then(({data})=> data.msg)
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
         });
    },
    async getOrdersHistory(user_id) {
        return await axios.post('https://api.ayazona.com/v2/customers/showOrders',
        {
            user_id,
            status: "1"
        })
        .then(({data})=> data.msg)
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
         });
    },
    verifyPhoneNumber(data) {
        return axios.post('https://api.ayazona.com/v2/customers/verifyPhoneNo', data)
    },
    async addPaymentMethod(cardDetils) {
        return await axios.post('https://api.ayazona.com/v2/customers/addPaymentMethod',
        {
            "default": "1",
            ...cardDetils
        })
        .then(({data})=> {
            if (data.code == 200) return data.msg;
            throw Error()
        })
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
        });
    },
    async getPaymentDetails(user_id) {
        return await axios.post('https://api.ayazona.com/v2/customers/getPaymentDetails',
        {
            status: "1",
            user_id
        })
        .then(({data})=> {
            if (data.code == 200) return data.msg;
            return [];

        })
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
        });
    },
    async getOrderDetails(order_id) {
        return await axios.post('https://api.ayazona.com/v2/customers/showOrderDetail',
        {order_id})
        .then(({data})=> {
            if (data.code === 200 && data.msg.length) return data.msg[0];
            throw Error()
        })
        .catch(err=> {
            console.log('Error ::', err);
            return [];
            // TODO: handle error
        });
    }
}

export { API }
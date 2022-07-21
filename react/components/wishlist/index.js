const axios = require('axios');



class Alert {

  oi(){



  console.log('ola 333')
  }

  req(){
    axios.get('/api/vtexid/pub/authenticated/user')
  .then(function (response) {
    // handle success
    console.log('ola ')
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log('ola 3')
    console.log(error);
  })
  .then(function () {

    console.log('ola4 ')
    // always executed
  });
  }

  order(){
    axios.get('/api/oms/pvt/orders?q=ruan.cs@hotmail.com' , {
  headers: {
    'X-VTEX-API-AppKey': `vtexappkey-speedware-XOILOD`,
    'X-VTEX-API-AppToken': `JVLBUNLZXHXUGDTZJCIZWIJQIUHUOVXOZCDKMERMRVXMHRTUGYKBVRRHYXDMKBBTKCBEXUSSFCBEZAVZXKIBXMPBGUDVMTJQPHJOZDWYEQGGCAGZOOIACKOEWCMCEQEQ`
  }
})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})
  }
}

export default Alert

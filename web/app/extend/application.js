
var Web3 = require('web3');
const WEB3 = Symbol('Application#web3');

module.exports =  {
    get web3(){

        // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
        if (!this[WEB3]) {
            // 实际情况肯定更复杂
            this[WEB3] = new Web3(Web3.givenProvider || this.config.my_config.httpProviderUrl)

            // console.log(this[WEB3]);
        }

        // console.log(this[WEB3]);

        return this[WEB3];

    }

  };
  
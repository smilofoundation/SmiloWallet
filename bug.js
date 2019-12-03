{
  "exception"
:
  {
    "values"
  :
    [{
      "type": "TypeError", "value": "Cannot read property '$on' of undefined", "stacktrace": {
        "frames": [{
          "colno": 14,
          "filename": "https://localhost:8080/vendors.js",
          "function": "flushCallbacks",
          "in_app": true,
          "lineno": 227431
        }, {
          "colno": 12,
          "filename": "https://localhost:8080/vendors.js",
          "function": "Array.<anonymous>",
          "in_app": true,
          "lineno": 227505
        }, {
          "colno": 13,
          "filename": "https://localhost:8080/vendors.js",
          "function": "flushSchedulerQueue",
          "in_app": true,
          "lineno": 229824
        }, {
          "colno": 22,
          "filename": "https://localhost:8080/vendors.js",
          "function": "Watcher.run",
          "in_app": true,
          "lineno": 230068
        }, {
          "colno": 25,
          "filename": "https://localhost:8080/vendors.js",
          "function": "Watcher.get",
          "in_app": true,
          "lineno": 229993
        }, {
          "colno": 10,
          "filename": "https://localhost:8080/vendors.js",
          "function": "VueComponent.updateComponent",
          "in_app": true,
          "lineno": 229580
        }, {
          "colno": 19,
          "filename": "https://localhost:8080/vendors.js",
          "function": "VueComponent.Vue._update",
          "in_app": true,
          "lineno": 229462
        }, {
          "colno": 5,
          "filename": "https://localhost:8080/vendors.js",
          "function": "VueComponent.patch [as __patch__]",
          "in_app": true,
          "lineno": 232075
        }, {
          "colno": 28,
          "filename": "https://localhost:8080/vendors.js",
          "function": "invokeInsertHook",
          "in_app": true,
          "lineno": 231856
        }, {
          "colno": 7,
          "filename": "https://localhost:8080/vendors.js",
          "function": "Object.insert",
          "in_app": true,
          "lineno": 228662
        }, {
          "colno": 7,
          "filename": "https://localhost:8080/vendors.js",
          "function": "callHook",
          "in_app": true,
          "lineno": 229733
        }, {
          "colno": 57,
          "filename": "https://localhost:8080/vendors.js",
          "function": "invokeWithErrorHandling",
          "in_app": true,
          "lineno": 227379
        }, {
          "colno": 48,
          "filename": "https://localhost:8080/app.js",
          "function": "VueComponent.mounted",
          "in_app": true,
          "lineno": 5545
        }]
      }
    }]
  }
,
  "event_id"
:
  "d3321513ab75475eae6ed67d7904bb0c", "platform"
:
  "javascript", "sdk"
:
  {
    "name"
  :
    "sentry.javascript.browser", "packages"
  :
    [{"name": "npm:@sentry/browser", "version": "5.4.3"}], "version"
  :
    "5.4.3", "integrations"
  :
    ["InboundFilters", "FunctionToString", "TryCatch", "Breadcrumbs", "GlobalHandlers", "LinkedErrors", "UserAgent", "Vue"]
  }
,
  "environment"
:
  "web", "release"
:
  "develop", "contexts"
:
  {
    "vue"
  :
    {
      "componentName"
    :
      "component <confirmation-container> at src/containers/ConfirmationContainer/ConfirmationContainer.vue", "propsData"
    :
      {
      }
    ,
      "lifecycleHook"
    :
      "mounted hook"
    }
  }
,
  "request"
:
  {
    "url"
  :
    "https://localhost:8080/#/interface/send-transaction", "headers"
  :
    {
      "User-Agent"
    :
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    }
  }
,
  "tags"
:
  {
    "network"
  :
    "XSMT", "service"
  :
    "Testnet Server 1", "walletType"
  :
    "web3_wallet"
  }
}


{
  "exception"
:
  {
    "values"
  :
    [{
      "type": "ReferenceError", "value": "Vue is not defined", "stacktrace": {
        "frames": [{
          "colno": 25,
          "filename": "https://localhost:8080/vendors.js",
          "function": "HTMLDivElement.original._wrapper",
          "in_app": true,
          "lineno": 232427
        }, {
          "colno": 14,
          "filename": "https://localhost:8080/vendors.js",
          "function": "HTMLDivElement.invoker",
          "in_app": true,
          "lineno": 227704
        }, {
          "colno": 26,
          "filename": "https://localhost:8080/vendors.js",
          "function": "invokeWithErrorHandling",
          "in_app": true,
          "lineno": 227379
        }, {
          "colno": 34,
          "filename": "https://localhost:8080/app.js",
          "function": "click",
          "in_app": true,
          "lineno": 13628
        }, {
          "colno": 19,
          "filename": "https://localhost:8080/app.js",
          "function": "VueComponent.logout",
          "in_app": true,
          "lineno": 2025
        }, {
          "colno": 21,
          "filename": "https://localhost:8080/vendors.js",
          "function": "Store.boundDispatch [as dispatch]",
          "in_app": true,
          "lineno": 234311
        }, {
          "colno": 15,
          "filename": "https://localhost:8080/vendors.js",
          "function": "Store.dispatch",
          "in_app": true,
          "lineno": 234417
        }, {
          "colno": 23,
          "filename": "https://localhost:8080/vendors.js",
          "function": "Array.wrappedActionHandler",
          "in_app": true,
          "lineno": 234712
        }, {
          "colno": 3,
          "filename": "https://localhost:8080/app.js",
          "function": "Store.clearWallet",
          "in_app": true,
          "lineno": 66549
        }]
      }
    }]
  }
,
  "event_id"
:
  "36d40b1672444eefafaa3994169ac223", "platform"
:
  "javascript", "sdk"
:
  {
    "name"
  :
    "sentry.javascript.browser", "packages"
  :
    [{"name": "npm:@sentry/browser", "version": "5.4.3"}], "version"
  :
    "5.4.3", "integrations"
  :
    ["InboundFilters", "FunctionToString", "TryCatch", "Breadcrumbs", "GlobalHandlers", "LinkedErrors", "UserAgent", "Vue"]
  }
,
  "environment"
:
  "web", "release"
:
  "develop", "contexts"
:
  {
    "vue"
  :
    {
      "componentName"
    :
      "component <LogoutWarning> at src/components/LogoutWarningModal/LogoutWarningModal.vue", "propsData"
    :
      "[undefined]", "lifecycleHook"
    :
      "v-on handler"
    }
  }
,
  "request"
:
  {
    "url"
  :
    "https://localhost:8080/#/access-my-wallet", "headers"
  :
    {
      "User-Agent"
    :
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    }
  }
,
  "tags"
:
  {
    "network"
  :
    "XSM", "service"
  :
    "Mainnet Server 1", "walletType"
  :
    "mew_connect"
  }
}

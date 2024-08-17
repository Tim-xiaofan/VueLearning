// plugins/i18n.ts
// 国际化插件：
// 一个翻译函数，这个函数接收一个以 . 作为分隔符的 key 字符串，
// 用来在用户提供的翻译字典中查找对应语言的文本

export default {
    install: (app: any, options: object) => {
        // 注入一个全局可用的 $translate() 方法
        app.config.globalProperties.$translate = (key:string) => {
            // 获取 `options` 对象的深层属性
            // 使用 `key` 作为索引
            return key.split('.').reduce((o, i) => {
                console.log('key: ', key);
                console.log('o: ', o);
                console.log('i: ', i);
                if (o) return o[i];
            }, options);
        },
        // 通过 provide 来为插件用户供给一些内容
        app.provide('i18n', options)
    }
}
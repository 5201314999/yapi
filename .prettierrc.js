module.exports = {
    printWidth: 120, // 一行的字符数，如果超过会进行换行，默认为 120
    tabWidth: 2, // 一个 tab 代表几个空格数，默认为 4
    useTabs: false, // 是否使用tab 进行缩进，默认为 false，表示用空格进行缩减
    singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
    semi: false, // 行位是否使用分号，默认为 true
    trailingComma: 'es5', // 是否使用尾逗号，有三个可选值 "<none|es5|all>"
    bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ foo: bar }
    arrowParens: 'avoid', // res => {} 箭头函数只有一个参数时不用小括号
}

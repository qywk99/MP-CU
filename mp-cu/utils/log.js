module.exports = {
    log(val) {
        console.log(
            `%c cuLog %c ` + val + ` %c`,
            'background:#0081ff; padding: 1px; border-radius: 3px 0 0 3px; color: #fff; font-weight: bold;',
            'background:rgba(0,129,255,.1); padding: 1px 5px; border-radius: 0 3px 3px 0; color: #0081ff;',
            'background:transparent'
        )
    },
}
import IPinfoWrapper, { IPinfo, AsnResponse } from "node-ipinfo";

const ipinfoWrapper = new IPinfoWrapper("e682170b519ead");

ipinfoWrapper.lookupIp("1.1.1.1").then((response: IPinfo) => {
    console.log(response);
});
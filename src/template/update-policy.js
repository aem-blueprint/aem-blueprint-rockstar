const fetch = require('node-fetch');
const FormData = require('form-data')

const form = new FormData();
form.append(':operation','delete');
// form.append('cq:styleClasses', 'teaser--image-size:test');
// form.append('cq:styleLabel', 'test');
// form.append('cq:styleId', 'teaser--image-size:test');
// form.append('jcr:primaryType', 'nt:unstructured');

const mode = process.env.MODE;
let url = mode === 'dev' ? process.env.DEV_AEM_URL : process.env.PROD_AEM_URL;
const credentials = mode === 'dev' ? process.env.DEV_CREDENTIALS : process.env.PROD_CREDENTIALS;
const site = mode === 'dev' ? process.env.DEV_AEM_SITE : process.env.PROD_AEM_SITE;
const policyUrl = `/conf/${site}/settings/wcm/policies/core/wcm/components/teaser/v1/teaser/content/cq:styleGroups/image-size/cq:styles/item7`
url = url.replace('://', `://${credentials}@`);
url = `${url}${policyUrl}`;

console.log('url',url);
// const url = `https://sites30:sites30@author-p32152-e108202.adobeaemcloud.com/conf/rockstar/settings/wcm/policies/core/wcm/components/teaser/v1/teaser/content/cq:styleGroups/image-size/cq:styles/item6`
fetch(url, {
  method: 'post',
  body: form,
}).then(res => res.text()).then(body => console.log('response',body));

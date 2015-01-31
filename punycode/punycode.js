var punycode = require('punycode');
console.log(punycode.decode('maana-pta')); // 'mañana' 
punycode.decode('--dqo34k'); // '☃-⌘'
// encode domain name parts
punycode.encode('mañana'); // 'maana-pta' 
punycode.encode('☃-⌘'); // '--dqo34k'
// decode domain names 
punycode.toUnicode('xn--maana-pta.com'); // 'mañana.com'
punycode.toUnicode('xn----dqo34k.com'); // '☃-⌘.com' 
// encode domain names
punycode.toASCII('mañana.com'); // 'xn--maana-pta.com' 
punycode.toASCII('☃-⌘.com'); // 'xn----dqo34k.com'

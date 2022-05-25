const dl = document.getElementById('list-group');
const modal = document.getElementById('modal');

dl.addEventListener('click', openModal);

function populateList() {

    let output = '';

    loveTranslations.forEach( (love) => {
        // conditionals to change font sizes & style for larger words & langauge by adding a class to the <dt>
        if (love.language === 'georgian' || love.language === 'malayalam' || love.language === 'tatar') {

            output += `<div class="item" tabindex="0">
                <dt class="smaller">${love.word}</dt>
                <dd>${love.language}</dd>
				<dd>${love.cnword}</dd>
            </div>`;

        } else if (to_medium.includes(love.language) === true){

            output += `<div class="item" tabindex="0">
                <dt class="medium">${love.word}</dt>
                <dd>${love.language}</dd>
				<dd>${love.cnword}</dd>
            </div>`;

        } else if (to_italic.includes(love.language) === true){

            output += `<div class="item" tabindex="0">
                <dt class="italic">${love.word}</dt>
                <dd>${love.language}</dd>
				<dd>${love.cnword}</dd>
            </div>`;

        } else {

            output += `<div class="item" tabindex="0">
                <dt>${love.word}</dt>
                <dd>${love.language}</dd>
				<dd>${love.cnword}</dd>
            </div>`;

        }
        
    });

    dl.innerHTML = output;
}

function openModal(e) {
    if (e.target.nodeName.toLowerCase() === 'dl') {return;}
    else if (e.target.classList.contains('item') === true) {

        const lang = e.target.children[1].innerText.toLowerCase();

        modal.classList.toggle('active');
        
        if (to_italic.includes(lang) === true) { // conditional to change font size for different word sizes and lettering styles, adding classes to h1

            modal.innerHTML += `<button onclick="closeModal()" id="modal-close-btn">X</button>
            <h1 class="italic">${e.target.children[0].innerText}</h1>
            <p class="lang-name">${e.target.children[1].innerText}</p>
			<p class="lang-name">${e.target.children[2].innerText}</p>`;

        } else if (to_medium.includes(lang) === true) {

            modal.innerHTML += `<button onclick="closeModal()" id="modal-close-btn">X</button>
            <h1 class="medium italic">${e.target.children[0].innerText}</h1>
            <p class="lang-name" style="margin-top:1.5rem">${e.target.children[1].innerText}</p>
			<p class="lang-name" style="margin-top:1.5rem">${e.target.children[2].innerText}</p>`;

        } else if (lang === 'georgian' || lang === 'malayalam' || lang === 'tatar') {

            modal.innerHTML += `<button onclick="closeModal()" id="modal-close-btn">X</button>
            <h1 class="smaller italic">${e.target.children[0].innerText}</h1>
            <p class="lang-name" style="margin-top: 3rem;">${e.target.children[1].innerText}</p>
			<p class="lang-name" style="margin-top: 3rem;">${e.target.children[2].innerText}</p>`;

        } else {

            modal.innerHTML += `<button onclick="closeModal()" id="modal-close-btn">X</button>
            <h1>${e.target.children[0].innerText}</h1>
            <p class="lang-name">${e.target.children[1].innerText}</p>
			<p class="lang-name">${e.target.children[2].innerText}</p>`;

        }
    }
}

function closeModal() {
    document.getElementById('modal').classList.toggle('active');
    modal.innerHTML = ''; // clearing out the modal text
}

// 100 love translatons: Object Array
const loveTranslations = [
    {
        "language": "English",
        "word": "Happy birthday"
		,"cnword":"英语"
    },
    {
        "language": "Spanish",
        "word": "Feliz cumpleaños a ti"
		,"cnword":"西班牙语"
    },
    {
        "language": "French",
        "word": "Joyeuse anniversaire"
		,"cnword":"法语"
    },
    {
        "language": "Dutch",
        "word": "Gefeliciteerd met je verjaardag"
		,"cnword":"荷兰语"
    }, 
    {
        "language": "Greek",
        "word": "Χρόνια πολλά"
		,"cnword":"希腊语"
    },
    {
        "language": "Arabic",
        "word": "عيد ميلاد سع"
		,"cnword":"阿拉伯语"
    },
    {
        "language": "Albanian",
        "word": "Gëzuar ditëlindjen"
		,"cnword":"阿尔巴尼亚语"
    },
    {
        "language": "Amharic",
        "word": "የልደት ቀን ደስታ"
		,"cnword":"阿姆哈拉语"
    },
    {
        "language": "Armenian",
        "word": "Ծնունդդ շնորհավոր"
		,"cnword":"亚美尼亚语"
    },
    {
        "language": "Azerbaijani",
        "word": "Ad günün mübarək"
		,"cnword":"阿塞拜疆语"
    },
    {
        "language": "Basque",
        "word": "Zorionak"
		,"cnword":"巴斯克语"
    },
    {
        "language": "Belarusian",
        "word": "З Днём Нараджэння"
		,"cnword":"白俄罗斯语"
    },
    {
        "language": "Bengali",
        "word": "শুভ জন্মদিন"
		,"cnword":"孟加拉语"
    },
    {
        "language": "Bosnian",
        "word": "sretan rođendan"
		,"cnword":"波斯尼亚语"
    },
    {
        "language": "Bulgarian",
        "word": "Честит Рожден ден"
		,"cnword":"保加利亚语"
    },
    {
        "language": "Catalan",
        "word": "feliç aniversari"
		,"cnword":"加泰罗尼亚语"
    },
    {
        "language": "Congo",
        "word": "ki salu kia bo"
		,"cnword":"刚果语"
    },
    {
        "language": "Chinese",
        "word": "生日快乐"
		,"cnword":"汉语"
    },
    {
        "language": "Corsican",
        "word": "felice anniversariu"
		,"cnword":"科西嘉语"
    },
    {
        "language": "Croatian",
        "word": "sretan rođendan"
		,"cnword":"克罗地亚语"
    },
    {
        "language": "Czech",
        "word": "Všechno nejlepší k narozeninám"
		,"cnword":"捷克语"
    },
    {
        "language": "Danish",
        "word": "Tillykke med fødselsdagen"
		,"cnword":"丹麦语"
    },
    {
        "language": "Esperanto",
        "word": "Feliĉan naskiĝtagon"
		,"cnword":"世界语"
    },
    {
        "language": "Estonian",
        "word": "palju õnne sünnipäevaks"
		,"cnword":"爱沙尼亚语"
    },
    {
        "language": "Filipino",
        "word": "Maligayang kaarawan"
		,"cnword":"菲律宾语"
    },
    {
        "language": "Finnish",
        "word": "hyvää syntymäpäivää"
		,"cnword":"芬兰语"
    },
    {
        "language": "Frisian",
        "word": "gelokkige jierdei"
		,"cnword":"弗里西亚语"
    },
    {
        "language": "Galician",
        "word": "Честит Рожден ден"
		,"cnword":"加利西亚语"
    },
    {
        "language": "Georgian",
        "word": "გილოცავ დაბადების დღეს"
		,"cnword":"格鲁吉亚语"
    },
    {
        "language": "German",
        "word": "alles Gute zum Geburtstag"
		,"cnword":"德语"
    },
    {
        "language": "Gujarati",
        "word": "જન્મદિવસ ની શુભકામના"
		,"cnword":"古吉拉特语"
    },
    {
        "language": "Haitian creole",
        "word": "bòn fèt"
		,"cnword":"海地克里奥尔语"
    },
    {
        "language": "Hausa",
        "word": "barka da ranar haihuwa"
		,"cnword":"豪萨语"
    },
    {
        "language": "Hawaiian",
        "word": "hauʻoli lā hānau"
		,"cnword":"夏威夷语"
    },
    {
        "language": "Hebrew",
        "word": "יום הולדת שמח"
		,"cnword":"希伯来语"
    },
    {
        "language": "Hindi",
        "word": "जन्मदिन की शुभकामनाएँ"
		,"cnword":"印地语"
    },
    {
        "language": "Hmong",
        "word": "zoo siab hnub yug"
		,"cnword":"苗语"
    },
    {
        "language": "Hungarian",
        "word": "boldog születésnapot"
		,"cnword":"匈牙利语"
    },
    {
        "language": "Icelandic",
        "word": "til hamingju með afmælið"
		,"cnword":"冰岛语"
    },
    {
        "language": "Igbo",
        "word": "ezi ncheta ọmụmụ"
		,"cnword":"伊博语"
    },
    {
        "language": "Indonesian",
        "word": "selamat ulang tahun"
		,"cnword":"印尼语"
    },
    {
        "language": "Irish",
        "word": "lá breithe shona duit"
		,"cnword":"爱尔兰语"
    },
    {
        "language": "Italian",
        "word": "buon compleanno"
		,"cnword":"意大利语"
    },
    {
        "language": "Japanese",
        "word": "お誕生日おめでとう"
		,"cnword":"日语"
    },
    {
        "language": "Javanese",
        "word": "Sugeng tanggap warsa"
		,"cnword":"爪哇语"
    },
    {
        "language": "Kannada",
        "word": "ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು"
		,"cnword":"卡纳达语"
    },
    {
        "language": "Kazakh",
        "word": "туған күнің құтты болсын"
		,"cnword":"哈萨克语"
    },
    {
        "language": "Khmer",
        "word": "រីករាយ​ថ្ងៃ​កំណើត"
		,"cnword":"高棉语"
    },
    {
        "language": "Kinyarwanda",
        "word": "Isabukuru nziza"
		,"cnword":"卢旺达语"
    },
    {
        "language": "Korean",
        "word": "생일 축하 해요"
		,"cnword":"韩语"
    },
    {
        "language": "Kurdish",
        "word": "rojbûna te pîroz be"
		,"cnword":"库尔德语"
    },
    {
        "language": "Kyrgyz",
        "word": "туулган күнүң менен"
		,"cnword":"吉尔吉斯语"
    },
    {
        "language": "Lao",
        "word": "ສຸກ​ສັນ​ວັນ​ເກີດ"
		,"cnword":"老挝语"
    },
    {
        "language": "Latin",
        "word": "felix natalis"
		,"cnword":"拉丁语"
    },
    {
        "language": "Latvian",
        "word": "daudz laimes dzimšanas dienā"
		,"cnword":"拉脱维亚语"
    },
    {
        "language": "Lithuanian",
        "word": "su gimtadieniu"
		,"cnword":"立陶宛语"
    },
    {
        "language": "Luxembourgish",
        "word": "Alles Guddes fir de Gebuertsdag"
		,"cnword":"卢森堡语"
    },
    {
        "language": "Macedonian",
        "word": "среќен роденден"
		,"cnword":"马其顿语"
    },
    {
        "language": "Malagasy",
        "word": "Arahabaina nahaterahan'ny andro nahaterahana"
		,"cnword":"马达加斯加语"
    },
    {
        "language": "Malay",
        "word": "selamat Hari lahir"
		,"cnword":"马来语"
    },
    {
        "language": "Malayalam",
        "word": "ജന്മദിനാശംസകൾ"
		,"cnword":"马拉雅拉姆语"
    },
    {
        "language": "Welsh",
        "word": "Penblwydd hapus"
		,"cnword":"威尔士语"
    },
    {
        "language": "Maori",
        "word": "hari huritau"
		,"cnword":"毛利语"
    },
    {
        "language": "Marathi",
        "word": "वाढदिवसाच्या हार्दिक शुभेच्छा"
		,"cnword":"马拉地语"
    },
    {
        "language": "Mongolian",
        "word": "Төрсөн өдрийн мэнд"
		,"cnword":"蒙古语"
    },
    {
        "language": "Burmese",
        "word": "ပျော်ရွင်ဖွယ်ရာမွေးနေ့"
		,"cnword":"缅甸语"
    },
    {
        "language": "Nepali",
        "word": "जन्मदिनको शुभकामना"
		,"cnword":"尼泊尔语"
    },
    {
        "language": "Norwegian",
        "word": "Gratulerer med dagen"
		,"cnword":"挪威语"
    },
    {
        "language": "Oriya",
        "word": "ଜନ୍ମଦିନର ଅଭିନନ୍ଦନ"
		,"cnword":"奥利亚语"
    },
    {
        "language": "Pashto",
        "word": "کلیزه دی نیکمرغه"
		,"cnword":"普什图语"
    },
    {
        "language": "Persian",
        "word": "عشق"
		,"cnword":"波斯语"
    },
    {
        "language": "Polish",
        "word": "تولدت مبارک"
		,"cnword":"波兰语"
    },
    {
        "language": "Portuguese",
        "word": "feliz Aniversário"
		,"cnword":"葡萄牙语"
    },
    {
        "language": "Punjabi",
        "word": "ਜਨਮਦਿਨ ਮੁਬਾਰਕ"
		,"cnword":"旁遮普语"
    },
    {
        "language": "Romanian",
        "word": "la multi ani"
		,"cnword":"罗马尼亚语"
    },
    {
        "language": "Russian",
        "word": "с днем ​​рождения"
		,"cnword":"俄语"
    },
    {
        "language": "Samoan",
        "word": "manuia asofanau"
		,"cnword":"萨摩亚语"
    },
    {
        "language": "Scots gaelic",
        "word": "co-là-breith math"
		,"cnword":"苏格兰盖尔语"
    },
    {
        "language": "Serbian",
        "word": "срећан рођендан"
		,"cnword":"塞尔维亚语"
    },
    {
        "language": "Sesotho",
        "word": "letsatsi le monate la tsoalo"
		,"cnword":"塞索托语"
    },
    {
        "language": "Shona",
        "word": "bhavhadhe rinofadza"
		,"cnword":"修纳语"
    },
    {
        "language": "Sindhi",
        "word": "جنم ڏينهن مبارڪ"
		,"cnword":"信德语"
    },
    {
        "language": "Sinhala",
        "word": "සුබ උපන්දිනයක් වේවා"
		,"cnword":"僧伽罗语"
    },
    {
        "language": "Slovak",
        "word": "šťastné narodeniny"
		,"cnword":"斯洛伐克语"
    },
    {
        "language": "Slovinian",
        "word": "vse najboljše"
		,"cnword":"斯洛文尼亚语"
    },
    {
        "language": "Somali",
        "word": "dhalasho Wacan"
		,"cnword":"索马里语"
    },
    {
        "language": "Uzbek",
        "word": "tug'ilgan kun muborak bo'lsin"
		,"cnword":"乌兹别克语"
    },
    {
        "language": "Swahili",
        "word": "Siku ya Kuzaliwa yenye furaha"
		,"cnword":"斯瓦希里语"
    },
    {
        "language": "Swedish",
        "word": "Grattis på födelsedagen"
		,"cnword":"瑞典语"
    },
    {
        "language": "Tamil",
        "word": "காதல்"
		,"cnword":"泰米尔语"
    },
    {
        "language": "Tatar",
        "word": "мәхәббәт"
		,"cnword":"鞑靼语"
    },
    {
        "language": "Telugu",
        "word": "பிறந்தநாள் வாழ்த்துக்கள்"
		,"cnword":"泰卢固语"
    },
    {
        "language": "Thai",
        "word": "สุขสันต์วันเกิด"
		,"cnword":"泰语"
    },
    {
        "language": "Turkish",
        "word": "doğum günün kutlu olsun"
		,"cnword":"土耳其语"
    },
    {
        "language": "Turkmen",
        "word": "Doglan günüň bilen"
		,"cnword":"土库曼语"
    },
    {
        "language": "Ukranian",
        "word": "З Днем Народження"
		,"cnword":"乌克兰语"
    },
    {
        "language": "Urdu",
        "word": "سالگرہ مبارک"
		,"cnword":"乌尔都语"
    },
    {
        "language": "Vietnamese",
        "word": "chúc mừng sinh nhật"
		,"cnword":"越南语"
    },
    {
        "language": "Yiddish",
        "word": "מזל דיין געבורסטאָג"
		,"cnword":"意第绪语"
    },
    {
        "language": "Zulu",
        "word": "Usuku olumnandi lokuzalwa"
		,"cnword":"祖鲁语"
    }
];

// array of languages that the characters need to italicised
const to_italic = ['hebrew', 'hindi', 'korean', 'kannada', 'lao', 'macedonian', 'mongolian', 'nepali', 'odia', 'russian', 'serbian', 'telugu', 'thai', 'marathi'];

// array of languages that need to reduced in font size
const to_medium = ['belarusian', 'bengali', 'greek', 'armenian', 'bulgarian', 'gujarati', 'khmer', 'kazakh', 'kyrgyz', 'punjabi', 'tamil', 'ukranian'];

populateList();

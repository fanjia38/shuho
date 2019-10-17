(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js + 1 modules
var styled_base_browser_esm = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 6 modules
var core_browser_esm = __webpack_require__(5);

// EXTERNAL MODULE: ./public/static/d/1144444893.json
var _1144444893 = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./public/static/d/3714433531.json
var _3714433531 = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/typography/dist/index.js
var dist = __webpack_require__(220);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/typography-theme-de-young/dist/index.js
var typography_theme_de_young_dist = __webpack_require__(222);
var typography_theme_de_young_dist_default = /*#__PURE__*/__webpack_require__.n(typography_theme_de_young_dist);

// CONCATENATED MODULE: ./src/utils/typography.ts


var typography = new dist_default.a(typography_theme_de_young_dist_default.a);
var scale = typography.scale,
    rhythm = typography.rhythm,
    options = typography.options;

/* harmony default export */ var utils_typography = (typography);
// CONCATENATED MODULE: ./src/components/header.tsx




/* harmony default export */ var header = (function (_ref) {
  var title = _ref.title,
      url = _ref.url,
      description = _ref.description;
  return Object(core_browser_esm["c" /* jsx */])(Header, null, Object(core_browser_esm["c" /* jsx */])("a", {
    href: url
  }, Object(core_browser_esm["c" /* jsx */])(Title, null, title)), Object(core_browser_esm["c" /* jsx */])(Description, null, description), Object(core_browser_esm["c" /* jsx */])(HeaderImage, {
    src: 'image/title.jpg'
  }));
});

var Header = Object(styled_base_browser_esm["a" /* default */])("header", {
  target: "ejdgxlv0"
})("text-align:center;padding-top:", rhythm(1.5), ";");

var Title = Object(styled_base_browser_esm["a" /* default */])("h1", {
  target: "ejdgxlv1"
})({
  name: "8hhk",
  styles: "margin-top:0;display:inline-block;"
});

var Description = Object(styled_base_browser_esm["a" /* default */])("p", {
  target: "ejdgxlv2"
})({
  name: "1surlz0",
  styles: "font-size:0.7rem;"
});

var HeaderImage = Object(styled_base_browser_esm["a" /* default */])("img", {
  target: "ejdgxlv3"
})({
  name: "1oie72r",
  styles: "max-width:900px;width:100%;"
});
// CONCATENATED MODULE: ./src/components/footer.tsx




/* harmony default export */ var footer = (function (props) {
  return Object(core_browser_esm["c" /* jsx */])(Footer, null, Object(core_browser_esm["c" /* jsx */])("p", null, "\xA9 2019 ", props.author));
});

var Footer = Object(styled_base_browser_esm["a" /* default */])("footer", {
  target: "eux9sa80"
})("padding:", rhythm(1), " 0 ", rhythm(0.5), ";text-align:center;border-top:1px solid;& > p{margin:0;font-size:0.8em;}@media screen and (max-width:768px){background-color:#646464;color:#fff;}");
// CONCATENATED MODULE: ./src/components/layout.tsx








var layout_ref = {
  name: "81m8xl",
  styles: "html{background-color:#f8f4e6;}a{color:#00aa8c;}"
};
/* harmony default export */ var layout = (function (_ref2) {
  var children = _ref2.children;
  var data = _3714433531.data;
  var siteMetadata = data.site.siteMetadata;
  return Object(core_browser_esm["c" /* jsx */])(Wrapper, null, Object(core_browser_esm["c" /* jsx */])(Helmet["Helmet"], null, Object(core_browser_esm["c" /* jsx */])("meta", {
    charSet: "utf-8"
  }), Object(core_browser_esm["c" /* jsx */])("title", null, siteMetadata.siteTitle), Object(core_browser_esm["c" /* jsx */])("link", {
    rel: "canonical",
    href: siteMetadata.siteUrl
  })), Object(core_browser_esm["c" /* jsx */])(core_browser_esm["a" /* Global */], {
    styles: layout_ref
  }), Object(core_browser_esm["c" /* jsx */])(header, {
    title: siteMetadata.siteTitle,
    url: siteMetadata.siteUrl,
    description: siteMetadata.siteDescription
  }), children, Object(core_browser_esm["c" /* jsx */])(footer, {
    author: siteMetadata.author
  }));
});

var Wrapper = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e1rsce8l0"
})({
  name: "r8p1fb",
  styles: "margin:0 auto;max-width:900px;color:#646464;font-family:arial,\"Microsoft Yahei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",Tahoma,Arial,Helvetica,PingFang SC,'Alegreya',sans-serif;"
});
// CONCATENATED MODULE: ./src/components/post.tsx




/* harmony default export */ var post = (function (_ref) {
  var content = _ref.content;
  return Object(core_browser_esm["c" /* jsx */])(post_Wrapper, null, Object(core_browser_esm["c" /* jsx */])("div", null, Object(core_browser_esm["c" /* jsx */])(post_Title, null, content.frontmatter.title), Object(core_browser_esm["c" /* jsx */])(post_Date, null, content.frontmatter.date)), Object(core_browser_esm["c" /* jsx */])(Body, {
    dangerouslySetInnerHTML: {
      __html: content.html
    }
  }));
});

var post_Wrapper = Object(styled_base_browser_esm["a" /* default */])("article", {
  target: "e1cr67y90"
})("margin-bottom:", rhythm(3), ";@media screen and (max-width:768px){margin:0 5px ", rhythm(3), ";}");

var post_Title = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e1cr67y91"
})("font-size:", rhythm(1), ";display:flex;align-items:center;&::after{content:'';border-top:1px solid;flex-grow:1;margin-left:5px;}@media screen and (max-width:768px){font-size:", rhythm(0.8), ";}");

var post_Date = Object(styled_base_browser_esm["a" /* default */])("h3", {
  target: "e1cr67y92"
})("font-size:", rhythm(0.7), ";font-weight:normal;color:#00aa8c;text-align:right;margin:0;");

var Body = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e1cr67y93"
})("color:#646464;line-height:1.7;font-size:0.8rem;word-wrap:break-word;word-break:break-all;padding-left:50px;h2{font-size:", rhythm(0.8), ";color:inherit;position:relative;background:linear-gradient(transparent 60%,#91ceb8 0%);padding:5px 0 5px 5px;width:50%;max-width:250px;}p{margin-bottom:0;}li{margin-bottom:0;ul{margin-top:0;}}pre{overflow-y:scroll;}code{background-color:#d7efc1;font-size:0.8rem;padding:0 5px;border-radius:3px;}@media screen and (max-width:768px){padding:0 10px;}");
// CONCATENATED MODULE: ./src/pages/index.tsx






/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  var data = _1144444893.data;
  return Object(core_browser_esm["c" /* jsx */])(layout, null, Object(core_browser_esm["c" /* jsx */])(PageCount, null, data.allMarkdownRemark.totalCount, " Posts"), data.allMarkdownRemark.edges.map(function (_ref) {
    var node = _ref.node;
    return Object(core_browser_esm["c" /* jsx */])(post, {
      key: node.id,
      content: node
    });
  }));
});

var PageCount = Object(styled_base_browser_esm["a" /* default */])("h4", {
  target: "e1l2xwo90"
})({
  name: "3qsa9y",
  styles: "font-size:0.8rem;text-align:right;color:inherit;padding-right:5px;"
});

/***/ }),

/***/ 212:
/***/ (function(module) {

module.exports = {"data":{"allMarkdownRemark":{"totalCount":15,"edges":[{"node":{"id":"b455971e-5ee7-5f22-955c-5a9b55cdb0d1","frontmatter":{"title":"周记#15","date":"2019-10-06"},"fields":{"slug":"/2019-10-06-週記-15/"},"html":"<p>中国語で書けなかった。</p>\n<h2>工作</h2>\n<ul>\n<li>一ヶ月以上作業していた案件の実装がひと段落した。チュートリアルレベルでの Redux は触っていても、案件で触るのは初めてでメンバーから教えていただいてばかりだった。振り返れば反省点も多く、もっと良い設計が出来たんじゃないかと考えることも多いが、より良い設計がどういうものかというイメージが湧かないのが悔しい。今回根気強く教えてくれたメンバーの離任が近々決まっているため、それまでにもう少し使いこなせるようになりたい。</li>\n<li>また今回 Redux 周りに関してのみほぼペアプロ状態で教えていただきながら実装をしていて、今携わっているプロダクトの方針というのもあるのだろうがその手法を取っていただいてとても良かった。どういう順番に実装していくか、作業していく中での優先度の付け方、調査が必要になったときにどう調べていくかを知見のある方のやり方を直接見て学べる。どんなプロダクトでも出来ることではないし、教えていただく方の負担にもなっていたと思う。本当に感謝したい。もし自分が教える側に立つことがあったら同じようなことをしたいと思う。</li>\n<li>ちなみにこの案件は iOS アプリの一部機能を Web 向けに再実装するというものだったが、必要な機能について調べる中で iOS は随分柔軟に UI 実装できるのだなと感じた。</li>\n</ul>\n<h2>博客</h2>\n<ul>\n<li>二ヶ月前に Gatsby 化したこの週報を、先週 TypeScript 化した。そして試しに GitHub Actions を使ってみている。GitHub Actions でビルド後のコミットまでできれば良いが、軽く調べると <code>uses</code> で<a href=\"https://github.com/peaceiris/actions-gh-pages\">他のリポジトリ</a>のコードを参照する仕組みが使われていることが多い。 Release まできちんと書くこともできるらしいが、個人的な週報にそこまで求めていないのと、 TOKEN を渡すことになるのか仕組みを理解していないので若干の不安がある。ちゃんと納得してから使いたい。</li>\n</ul>\n<h2>手机游戏</h2>\n<ul>\n<li>少し前にリリースされた<a href=\"https://www.dragonquest.jp/walk/\">ドラクエウォーク</a>にハマっている。食後のに歩き回ることはしなくなったが、歩くことは好きなのでなんとなくこのまま続けていきたい。</li>\n</ul>"}},{"node":{"id":"7a4d3255-0f44-58f9-9325-976f7342a564","frontmatter":{"title":"周记#14","date":"2019-08-25"},"fields":{"slug":"/2019-08-25-週記-14/"},"html":"<h2>工作</h2>\n<ul>\n<li>今月から一つのプロダクトに専念できる環境になったが、 React に注力できてとても良かったと改めて思う。人の多い職場でもあるため、相談しやすい環境が整っていて、今後何か新しい挑戦をするとしても失敗できる環境でもあるなと感じている。</li>\n</ul>\n<h2>汉语</h2>\n<ul>\n<li>我被朋友邀请，我们和她的中国人同事们一起吃午饭。她们的名字是王小姐和冰冰，职业是工程师。</li>\n<li>我能说汉语有一点，但是我真的听不懂正在她们说的汉语。我努力学习～</li>\n<li><code>前端 Qiánduān</code> フロントエンド</li>\n<li><code>四川 Sìchuān</code> 四川</li>\n<li><code>静冈 Jìnggāng</code> 静岡</li>\n<li><code>金刚 Jīngāng</code> キングコング</li>\n</ul>\n<h2>电影</h2>\n<ul>\n<li>我看了<a href=\"https://eiga.com/movie/54464/\">《プール》</a>。我想去泰国。ゆるい映画で、のんびりと見るにはちょうど良かった。</li>\n</ul>"}},{"node":{"id":"3f0ca1a9-80f2-566c-b846-0196036bf79b","frontmatter":{"title":"周记#13","date":"2019-08-18"},"fields":{"slug":"/2019-08-18-週記-13/"},"html":"<p>我从八月十号到十八号暑假。</p>\n<ul>\n<li>我和朋友一起去奥多摩。那么，我们能在山间漫步或者风景照。</li>\n<li>我完成 <a href=\"https://www.gatsbyjs.org/tutorial/\">Gatsby 的 Tutorial</a>，所以我想重新安排这博客。先用 Gatsby 创建过度完了，然后我想使用 Typescript 和 Markdown 的 css。</li>\n<li>好久没去水族馆，很开心。</li>\n</ul>"}},{"node":{"id":"1eb71560-48e2-584e-b043-052e222f3afc","frontmatter":{"title":"周记#12","date":"2019-08-04"},"fields":{"slug":"/2019-08-04-週記-12/"},"html":"<ul>\n<li>我七月末辞团队，这个月开始了别的工作。这星期二开了欢送会，同事们那里收到了寄せ書き。我特别开心啊～</li>\n<li>星期五我去朋友公司的新办公司。我能认识有些人的女工程师，我们因为新撰組的话沸腾了起。哈哈。</li>\n</ul>"}},{"node":{"id":"970d78fa-86ee-514b-89db-a9a110da3e03","frontmatter":{"title":"周记#11","date":"2019-05-26"},"fields":{"slug":"/2019-05-26-週記-11/"},"html":"<h2>TestCafe</h2>\n<ul>\n<li>仕事で最近引き継いでリファクタリングをしている <a href=\"https://devexpress.github.io/testcafe/\">TestCafe</a> を利用した E2E テストのプロジェクトがある。</li>\n<li>サービスに関する操作の一連の流れを大きな一つのテストとして扱っているため、もう少し細かく分割できないかと調べてみたができなさそうだった(先行するテストの結果次第で後続のテストを実行するかどうかを判断したかった)。目的はターミナルに出力されるログの整理なので <code>console.log</code> を wrap する関数と <code>chalk</code> などで解決できそう。</li>\n<li>テスト実行中にエラーが起きた時、大きなテストの後続で行われるはずの処理が実行されないために問題が起きることがある。 <a href=\"https://github.com/fanjia38/testcafe-sample\">fanjia38/testcafe-sample</a> で検証し、ある程度の解決方法の目処がたった。テストの状態を <code>ctx</code> で管理し、テストの最後に実行される <code>after</code> で後処理を行うようにしてみたい。</li>\n</ul>\n<h2>Ginza.js#1</h2>\n<ul>\n<li>職場から割と近い場所で開催されたため、同僚の何名かと一緒に行ってきた。久々に感想など諸々をブログに書こうと思い立ったので、そのうち投稿したい。</li>\n</ul>\n<h2>lint-staged</h2>\n<ul>\n<li>testcafe-sample を作っている中で <a href=\"https://www.npmjs.com/package/lint-staged\">lint-staged</a> に関する警告が表示された。今回作っていたリポジトリでは、 JS ファイルしか扱わないので <code>husky</code> の pre-commit のみで対応したが、同じことを別の方法でできないか調べておきたい。</li>\n</ul>\n<pre><code class=\"language-bash\">`lint-staged` no longer supports running scripts defined in package.json.\n\nThe same behavior can be achieved by changing the command to any of the following:\n- `npm run lint:fix -- `\n- `eslint --fix test/* `\n</code></pre>"}},{"node":{"id":"035435aa-be99-564d-82d2-9313b9ab1aa8","frontmatter":{"title":"周记#10","date":"2019-04-28"},"fields":{"slug":"/2019-04-28-週記-10/"},"html":"<p>勉強できていないため、中国語の文章を作るのに時間がかかってしまう上に短文しか書けないのでしばらく日本語で書いていこうと思う。</p>\n<ul>\n<li>前任者が抜けたため、 <a href=\"https://devexpress.github.io/testcafe/\">TestCafe</a> で書かれた自動テストのコードを引き継ぐことになった。前任者から直接引き継ぎの説明を受けていた先輩から、説明なしにテストコードを渡されている事実に若干戸惑っているが、割り切って自由にやらせてもらおうと思う。</li>\n<li>同僚から、 Git クライアントの <a href=\"https://git-fork.com\">Fork</a> を教えてもらった。 Working Directory 下のリポジトリが全て自動で読み込まれる、 UI 上でツリー構造を確認できること、タブ表示のためウィンドウが増えないこと、なにより挙動の軽さが使っていて便利なため、 SourceTree から乗り換えることにした。</li>\n<li>Twitter で <a href=\"https://twitter.com/hashtag/%E7%A7%81%E3%81%AE%E4%BA%BA%E7%94%9F%E3%82%92%E5%A4%89%E3%81%88%E3%81%9F%E5%8B%89%E5%BC%B7%E4%BC%9A?src=hash\">#私の人生を変えた勉強会</a> のタグが流行り、様々な人たちが答えを投稿していた。自分の尊敬している人たち・勉強会でお会いしたことのある人たちの多くが何かしらのきっかけで今があることが興味深かった。</li>\n</ul>"}},{"node":{"id":"344e3b4e-2b35-554a-b61a-cf48e9601fb2","frontmatter":{"title":"周记#9","date":"2018-12-16"},"fields":{"slug":"/2018-12-16-週記-9/"},"html":"<p>久违地写了周记。我想写这一个月间的事。</p>\n<ul>\n<li>三周前，我和同事们一起去 Node Festival ( <a href=\"https://nodefest.jp/2018/\">Node 学园</a> )。关于 GraphQL 和 IoT 的话非常有意思。</li>\n<li>二周前，我去了天园郊游路线(天园ハイキングコース)。还有，我的外祖父去世了。见到了久违的表姐妹。</li>\n<li>我看了一些电影 ，《The Man Who Knew Infinity(奇迹がくれた数学)》,《Wonderstruck》,《SNOWDEN》。</li>\n</ul>"}},{"node":{"id":"a9bddcfb-043b-5498-bc96-07d09483bcae","frontmatter":{"title":"周记#8","date":"2018-11-18"},"fields":{"slug":"/2018-11-18-週記-8/"},"html":"<ul>\n<li>受到同事的影响我开始<a href=\"https://onlinejudge.u-aizu.ac.jp/\">Aizu Online Judge</a>。这是会津大学提供服务、有很多程序设计的例题。</li>\n<li>我读了在《大数学家》中Fermat和Pascal的章节。完全不懂他们的数式，可是我对他们的人生很感兴趣。</li>\n<li>我感冒了。</li>\n</ul>"}},{"node":{"id":"5670581c-e88b-5c8b-91a2-ab3007718534","frontmatter":{"title":"周记#7","date":"2018-10-28"},"fields":{"slug":"/2018-10-28-週記-7/"},"html":"<ul>\n<li>最近我看了电影《What Maisie Knew（メイジーの知ったこと）》。六岁的女孩子很可爱，但是寂寞。</li>\n<li>星期三是我的生日。从前同事那收到了礼物非常开心。</li>\n<li>我被前同事拜托了做制作网页。我会努力啊～</li>\n</ul>"}},{"node":{"id":"11cd5c51-08f3-526f-96e6-b1f5224515c8","frontmatter":{"title":"周记#6","date":"2018-10-08"},"fields":{"slug":"/2018-10-08-週記-6/"},"html":"<ul>\n<li>我学习数学和React。</li>\n<li>最近我读《大数学家》，那个很难啊。我不喜欢数学。。。</li>\n</ul>"}},{"node":{"id":"e94e2dc3-1d17-5d11-a370-7c147799fc45","frontmatter":{"title":"周记#5","date":"2018-09-30"},"fields":{"slug":"/2018-09-30-週報\b-5/"},"html":"<h2>工作</h2>\n<p>打印文档是的 margin 因浏览器而异。使用 <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@page\">@page</a> 规则可以修改文档的 margin，但不能用 Safari。\n我做了这个。</p>\n<ul>\n<li>\n<p>适用仅限 Safari</p>\n<pre><code class=\"language-css\">_::-webkit-full-page-media, _:future, :root .selector {\nbackground-color: red;\n}\n</code></pre>\n</li>\n<li>\n<p>适用仅限 IE11</p>\n<pre><code class=\"language-css\">@media all and (-ms-high-contrast: none) {\n*::-ms-backdrop, .selector {\nbackground-color: red;\n}\n}\n</code></pre>\n</li>\n<li><a href=\"https://sublimelife.hatenablog.com/entry/2017/02/06/102109\">safariのみに適用させるcssハックが効かないときに試す最新の記述方法【2017年】 - SublimeなLife日記</a></li>\n<li><a href=\"http://neos21.hatenablog.com/entry/2018/03/11/080000\">IE11 のみ CSS を適用させる CSS ハック - Corredor</a></li>\n</ul>"}},{"node":{"id":"d1aeaaa9-ba88-504c-890b-eeb74778e6a2","frontmatter":{"title":"周记#4","date":"2018-09-24"},"fields":{"slug":"/2018-09-24-週報-4/"},"html":"<ul>\n<li>我和 kt3k 先生呀，小春呀一起去 JavaScript 的学习会《Roppongi.js》了。</li>\n<li>伊坂幸太郎的小说「潜水艇（サブマリン）」看完了。我喜欢这个系列！</li>\n<li>连休的时候去福冈旅行了。我去了太宰府天满宫和门司港怀旧呀。我吃了肠锅（もつ鍋）呀，烤咖喱呀，博多拉面呀。我想再去一次博多～</li>\n</ul>"}},{"node":{"id":"e94f9e38-eea4-5905-996d-7e28d595066f","frontmatter":{"title":"周记#3","date":"2018-09-17"},"fields":{"slug":"/2018-09-17-週報-3/"},"html":"<ul>\n<li>我和我的同事一起去东京巨蛋看美式足球。我们助威的组队赢了比赛。</li>\n<li>樱庭一树的小说「GOSICK」看完了。非常有趣～</li>\n</ul>"}},{"node":{"id":"92fa0f3d-56e2-5b5e-b394-2ae71d217d60","frontmatter":{"title":"周记#2","date":"2018-09-09"},"fields":{"slug":"/2018-09-09-週報-2/"},"html":"<ul>\n<li>我被 Marine 小姐邀请去了学习会，我在那里见面她的朋友们。她们都很亲切。</li>\n<li>中文很难啊。。。</li>\n</ul>"}},{"node":{"id":"36e9daeb-b16c-5d95-ad98-882436aa2012","frontmatter":{"title":"周记#1","date":"2018-09-02"},"fields":{"slug":"/2018-09-02-週報-1/"},"html":"<p>为了学习台湾华语，我写周记。\n我的中文说得不好。我会努力的。</p>\n<ul>\n<li>我买了蓝牙耳机。</li>\n<li>星期五我同事的最后上班日，她九月开始休产假。我很寂寞。</li>\n<li>小说「企鹅高速公路(ペンギン・ハイウェイ)」看完了。下次想看电影。</li>\n<li>好久没去美术馆了，我和朋友一起看了莫奈展。</li>\n<li>利用<a href=\"https://hexo.io\">hexo</a>搭建了本博客。</li>\n</ul>\n<h2>生词</h2>\n<ul>\n<li>搭建 <code>Dājiàn</code></li>\n<li>产假 <code>Chǎnjià</code></li>\n<li>企鹅 <code>Qì'é</code></li>\n<li>克洛德·莫奈 <code>Kè luò dé·mò nài</code></li>\n</ul>"}}]}}};

/***/ }),

/***/ 213:
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"siteTitle":"shuho","siteUrl":"https://fanjia38.github.io/shuho","siteDescription":"fanjia38 中文的周记。我的中文不好，たまに日本語。"}}}};

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-tsx-8764706bd1f351a113c9.js.map
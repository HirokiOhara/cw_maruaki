<template>
  <v-container>
<!--  ****************************** ****************************** ****************************** -->
<!--  ****************************** ****************************** ****************************** -->
<!-- PC用 -->
    <div class="content-box-body hidden-sm-and-down">
      <h2 class="vertical-text test">
        植栽
      </h2>

      <div class="content-box-dark content-box-body">
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="8">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-img
                  height="700"
                  src="/shokusai/02.jpg"
                  :lazy-src="`https://picsum.photos/16/9`"
                >
                  <template v-slot:placeholder>
                    <LoadingImg />
                  </template>
                  <v-overlay
                    absolute
                    v-if="hover"
                  >
                    <h3>
                      引っ越しや庭の模様替えのときの、「この樹を残したい」という想いを実現します。
                    </h3>
                    <p>
                      <br />
                      慎重かつ大胆に根切作業をおこない、掘り上げた樹の根を麻の紐と布で養生します。<br />
                      そして、そのまま移植することで、麻の紐と布は年月を経て土へ還っていゆきます。<br /><br />
                      ギリギリまで根を切り詰めながら、根本は残すことで、樹は新天地でもしっかりと根付くことができます。
                    </p>
                  </v-overlay>
                </v-img>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark content-box-body">
        <v-row>
          <v-col cols="6">
            <v-img
              height="500"
              src="/shokusai/before.svg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="6">
            <v-img
              height="500"
              src="/shokusai/after.svg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center" align="start">
          <v-col cols="6">
            <h3>
              生け垣の上面が真っ直ぐに伸びてゆくことに拘りを持っています。<br />
            </h3>
            <p>
              <br />
              一定の高さで刈り込むには相当な腕力が必要なため、ばらつきが出てしまうのが普通です。<br /><br />

              約6Kgのエンジン式トリマーを、100m移動する間、同じ高さで固定して持ち続ける。<br />
              私たちは、女性の職人も含め、全員がこの技術を身につけています。<br /><br />

              生け垣は、家の景観でありながら、街の景観でもあります。<br />
              そのため、キレイになっているのは当たり前だと思われている方も少なくありません。
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark content-box-body">
        <v-row justify="center">
          <v-col cols="6">
            <v-img
              height="500"
              src="/shokusai/06.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="4">
            <h3>
              薬剤の散布では、「対象の植栽」と「季節」、「天候」の3つの要因を考える必要があります。
            </h3>
            <p>
              <br />
              そのため、適切に調合された薬剤と市販のものでは明らかな差が出てしまいます。<br /><br />

              当社には3名の「農薬適正使用アドバイザー」が在籍しています。<br />
              その知識をもって、ご希望に沿った内容を実現することができます。<br /><br />

              また、個人で薬剤を扱ったあとに異常が起きてしまうと、その後の対処は判断が厳しくなります。<br />
              その異常時においても、年間契約させていただいているところでは無料で対応しています。
            </p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4" class="d-flex test2">
            <div>
              <h3>
                ハチの巣の駆除の依頼は、年々増加しています。
              </h3>
              <p>
                <br />
                近年、思わぬところにスズメバチの巣を見かけます。<br />
                私たちは専門家ではありませんが、過剰に薬剤を使うことなく、環境に合わせて対応します。<br /><br />

                また、私たちは、蜂の巣の駆除と合わせて植栽や施工も行うことができます。<br />
                蜂の巣駆除の専門の会社では、景観の手入れを行うことはできません。<br /><br />

                駆除の際に改めて植栽や外構をキレイにし、気持ちの良い日々を迎えるのはいかがでしょうか。
              </p>
            </div>
          </v-col>
          <v-col cols="4">
            <v-img
              contain
              height="500"
              src="/shokusai/15.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark content-box-body">
        <v-row>
          <v-col cols="6">
            <v-img
              height="500"
              src="/shokusai/13.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="6">
            <v-img
              height="500"
              src="/shokusai/14.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center" align="start">
          <v-col cols="6">
            <h3>
              緑地は手入れが行き届くことで、全く違った様子になります。
            </h3>
            <p>
              <br />
              特に芝生は、手入れをするほど良くなってゆきます。<br /><br />

              道具は、自走式や肩掛け式の刈払機を用います。<br />
              一方で、手抜き除草と芝生専用の除草剤を散布します。<br /><br />

              手抜き除草は、機械を使ったものに比べて約3倍の時間がかかります。<br />
              時間がかかってしまうため、近年ではほとんどこの作業風景は見られません。<br />
              ですが、手抜き除草は根本から雑草を除去できるため、芝生のキレイな状態が比較的長く続きます。<br />
              私たちは庭師として真摯に植栽に向かい合い、手抜き作業を現在でも続けています。
            </p>
          </v-col>
        </v-row>
      </div>

    </div>


    <div class="content-box-body hidden-sm-and-down">
      <h2 class="vertical-text test">
        施工
      </h2>

      <div class="content-box-dark content-box-body">
        <v-row justify="end" class="content-box-body">
          <v-col cols="4" class="d-flex test3">
            <div>
              <h3>
                数年経っても草が生えてこない。<br />
                これが私たちの提案する防草工事です。
              </h3>
              <p>
                <br />
                一般的には、防草シートを用います。<br />
                しかし、シートでは2つの欠点があります。<br /><br />

                1つは、1年後には草が生えてしまうこと。<br />
                もう1つは、シートの上の砂利が少なくなると、シートの存在が目立って不格好になってしまうこと。<br /><br />

                これらの課題に対して、当社はオリジナルの方法を用いて解決することができます。
              </p>
            </div>
          </v-col>
          <v-col cols="6">
            <v-img
              height="500"
              src="/seko/02.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
            <v-img height="500" src="/seko/04.jpg" :lazy-src="`https://picsum.photos/16/9`"></v-img>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark content-box-body">
        <v-row>
          <v-col offset="2" cols="8">
            <h3>
              キレイな緑のある景観を諦めている方に、人工芝という選択肢を提案しています。
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-img
              src="/seko/05.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              src="/seko/06.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              src="/seko/08.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="2" cols="4">
            <p>
              たしかに、芝生は癒やしを与えてくれる一方で、管理には手間と費用がかかります。<br /><br />

              しかし、人工であることに抵抗感を持たれる方も少なくないと推察します。<br />
              私たちは、人工芝の国内メーカーから直接仕入れ、実際の芝生に近いものを採用しております。<br /><br />

              マンション専用庭や、手つかずになっている庭などに、新しい緑の空間を作ってみるのはいかがでしょうか。
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark content-box-body">
        <v-row>
          <v-col cols="6">
            <v-img
              height="500"
              src="/seko/15.jpeg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="4" class="d-flex test2">
            <div>
              <h3>
                外構工事（エクステリア、塗装など）も請け負っています。
              </h3>
              <p>
                <br />
                芝生の代わりにインターロッキング、生け垣の代わりにブロック塀など、緑を減らしてゆくお客様が多いのは事実です。<br />
                しかし、その無機質なモノの設置に関しても、私たち庭師による「空間美」を提案することで、どこか良いものになると信じております。
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-img
              height="500"
              src="/seko/14.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="4">
            <p>
              また、これからの日本では、古き良きものを形を変えて使い続けていくことで、生活の豊かさが広がってゆくと考えています。<br />
              そこで、景観を改修するときに、スクラップ・アンド・ビルドではなく、ヴィンテージにしてゆくのはいかがでしょうか。<br /><br />

              新しいものが絶対に良い、と言える時代は過ぎ去りました。<br /><br />

              近年流行っているSDGs (Sustainable Development Goals)という概念も、これに当てはまると思います。<br />
              お客様が思う理想を相談していただき、より価値のある空間づくりを共にしてゆきたいと思っています。
            </p>
          </v-col>
        </v-row>
      </div>

    </div>


    <div class="content-box-body hidden-sm-and-down">
      <h2 class="vertical-text test">
        造園
      </h2>

      <div class="content-box-dark content-box-body">
        <v-row justify="center">
          <v-col cols="8">
            <v-img
              height="700"
              src="/zouen/warabocchi.svg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
            <h3>
              毎年変わらない素材で、毎年変化を楽しむことができるものとして、正月飾りに「藁ぼっち」を選ぶのも粋ではないでしょうか。
            </h3>
            <p>
              <br />
              藁ぼっちは、稲作における藁の保存方法が由来です。<br />
              その風景から美を見出し、造園では、藁ぼっちを庭の冬化粧として飾り付けています。<br /><br />

              すぐり藁の量や、シュロ縄の結び方で様々な表情を見せます。<br />
              空間に合ったものになるように造り、お客様から毎年好評を頂いています。
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark content-box-body">
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="3">
            <v-img
              height="500"
              src="/zouen/04.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="4" class="d-flex test3" style="height: 500px;">
            <div>
              <h3>
                丸いものは丸く、四角いものは四角く刈り込む。<br />
                樹木それぞれの柔らかさを生かして剪定するのが庭師です。
              </h3>
              <p>
                <br />
                機械式は一切用いず、刈込鋏や剪定鋏で作業します。<br />
                また、乗馬ズボン、手甲、足袋は普段から身につけて作業していますが、冬の庭の手入れのときだけは、半纏（はんてん）を着て作業するほど、庭の手入れには拘りを持っています。<br /><br />

                お客様には、この作業風景も見て、楽しんでいただけると思います。
              </p>
            </div>
          </v-col>
          <v-col cols="3">
            <v-img
              height="500"
              src="/zouen/06.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark content-box-body">
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="8">
            <v-parallax
              src="/zouen/07.jpg"
              height="700"
            ></v-parallax>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark content-box-body">
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="4">
            <v-img
              src="/zouen/08.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              src="/zouen/09.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="4">
            <v-img
              src="/zouen/10.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="4">
            <h3>
              寒さから樹を守りつつ、魅せる技術があります。
            </h3>
          </v-col>
          <v-col cols="4">
            <p>
              ソテツやボタンなど、寒さに弱い樹はそのままでは日本の冬を越すことができません。<br />
              そのために霜除けをします。<br /><br />

              霜除けには「巻き上げ」や「段飾り」などの工法があります。<br />
              近年では、すぐり藁の入手が困難になってきており、使う藁の少ない「巻き上げ」がほとんどです。<br />
              そして最上部には、藁ぼっちで飾り付けをします。<br /><br />

              巻き上げるシュロ縄の角度、幅、わらの膨らみ具合など、美しく魅せる技術が問われます。
            </p>
          </v-col>
        </v-row>
      </div>

    </div>






<!--  ****************************** ****************************** ****************************** -->
<!--  ****************************** ****************************** ****************************** -->
<!-- スマホ・タブレット用 -->
    <div class="content-box-dark-responsive content-box-body hidden-md-and-up">
      <h2 class="vertical-text">
        植栽
      </h2>
      <!-- <v-divider class="my-4"></v-divider> -->
      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="12">
            <v-img
              height="500"
              src="/shokusai/02.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
              <v-overlay absolute>
                <v-row justify="center">
                  <v-col cols="11">
                    <h3>
                      引っ越しや庭の模様替えのときの、「この樹を残したい」という想いを実現します。
                    </h3>
                    <p>
                      <br />
                      慎重かつ大胆に根切作業をおこない、掘り上げた樹の根を麻の紐と布で養生します。<br />
                      そして、そのまま移植することで、麻の紐と布は年月を経て土へ還っていゆきます。<br /><br />
                      ギリギリまで根を切り詰めながら、根本は残すことで、樹は新天地でもしっかりと根付くことができます。
                    </p>
                  </v-col>
                </v-row>
              </v-overlay>
            </v-img>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark-responsive content-box-body">
        <v-row>
          <v-carousel
            delimiter-icon="mdi-minus"
            hide-delimiter-background
          >
            <v-carousel-item
              v-for="(photo, i) in shokusai"
              :key="i"
              :src="photo.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-row>
        <v-row justify="center" align="start">
          <v-col cols="10">
            <h3>
              生け垣の上面が真っ直ぐに伸びてゆくことに拘りを持っています。<br />
            </h3>
            <p>
              <br />
              一定の高さで刈り込むには相当な腕力が必要なため、ばらつきが出てしまうのが普通です。<br /><br />

              約6Kgのエンジン式トリマーを、100m移動する間、同じ高さで固定して持ち続ける。<br />
              私たちは、女性の職人も含め、全員がこの技術を身につけています。<br /><br />

              生け垣は、家の景観でありながら、街の景観でもあります。<br />
              そのため、キレイになっているのは当たり前だと思われている方も少なくありません。
            </p>
          </v-col>
        </v-row>
      </div>


      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center">
          <v-col cols="12">
            <v-img
              contain src="/shokusai/06.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="10">
            <h3>
              薬剤の散布では、「対象の植栽」と「季節」、「天候」の3つの要因を考える必要があります。
            </h3>
            <p>
              <br />
              そのため、適切に調合された薬剤と市販のものでは明らかな差が出てしまいます。<br /><br />

              当社には3名の「農薬適正使用アドバイザー」が在籍しています。<br />
              その知識をもって、ご希望に沿った内容を実現することができます。<br /><br />

              また、個人で薬剤を扱ったあとに異常が起きてしまうと、その後の対処は判断が厳しくなります。<br />
              その異常時においても、年間契約させていただいているところでは無料で対応しています。
            </p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-img
              contain
              src="/shokusai/15.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="10" class="d-flex test2">
            <div>
              <h3>
                ハチの巣の駆除の依頼は、年々増加しています。
              </h3>
              <p>
                <br />
                近年、思わぬところにスズメバチの巣を見かけます。<br />
                私たちは専門家ではありませんが、過剰に薬剤を使うことなく、環境に合わせて対応します。<br /><br />

                また、私たちは、蜂の巣の駆除と合わせて植栽や施工も行うことができます。<br />
                蜂の巣駆除の専門の会社では、景観の手入れを行うことはできません。<br /><br />

                駆除の際に改めて植栽や外構をキレイにし、気持ちの良い日々を迎えるのはいかがでしょうか。
              </p>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark-responsive content-box-body">
        <v-row>
          <v-col cols="12">
            <v-img
              src="/shokusai/13.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
            <v-img
              src="/shokusai/14.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center" align="start">
          <v-col cols="10">
            <h3>
              緑地は手入れが行き届くことで、全く違った様子になります。
            </h3>
            <p>
              <br />
              特に芝生は、手入れをするほど良くなってゆきます。<br /><br />

              道具は、自走式や肩掛け式の刈払機を用います。<br />
              一方で、手抜き除草と芝生専用の除草剤を散布します。<br /><br />

              手抜き除草は、機械を使ったものに比べて約3倍の時間がかかります。<br />
              時間がかかってしまうため、近年ではほとんどこの作業風景は見られません。<br />
              ですが、手抜き除草は根本から雑草を除去できるため、芝生のキレイな状態が比較的長く続きます。<br />
              私たちは庭師として真摯に植栽に向かい合い、手抜き作業を現在でも続けています。
            </p>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="content-box-dark-responsive content-box-body hidden-md-and-up">
      <h2 class="vertical-text">
        施工
      </h2>

      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center" class="content-box-body">
          <v-col cols="10">
            <div>
              <h3>
                数年経っても草が生えてこない。<br />
                これが私たちの提案する防草工事です。
              </h3>
              <p>
                <br />
                一般的には、防草シートを用います。<br />
                しかし、シートでは2つの欠点があります。<br /><br />

                1つは、1年後には草が生えてしまうこと。<br />
                もう1つは、シートの上の砂利が少なくなると、シートの存在が目立って不格好になってしまうこと。<br /><br />

                これらの課題に対して、当社はオリジナルの方法を用いて解決することができます。
              </p>
            </div>
          </v-col>
          <v-col cols="12">
            <v-img
              src="/seko/02.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
            <v-img
              src="/seko/04.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center">
          <v-col cols="10">
            <h3>
              キレイな緑のある景観を諦めている方に、人工芝という選択肢を提案しています。
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-carousel
            hide-delimiter-background
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item
              v-for="(photo, i) in seko"
              :key="i"
              :src="photo.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-row>
        <v-row justify="center">
          <v-col cols="10">
            <p>
              たしかに、芝生は癒やしを与えてくれる一方で、管理には手間と費用がかかります。<br /><br />

              しかし、人工であることに抵抗感を持たれる方も少なくないと推察します。<br />
              私たちは、人工芝の国内メーカーから直接仕入れ、実際の芝生に近いものを採用しております。<br /><br />

              マンション専用庭や、手つかずになっている庭などに、新しい緑の空間を作ってみるのはいかがでしょうか。
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center">
          <v-col cols="12">
            <v-img
              src="/seko/15.jpeg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="10" class="d-flex test2">
            <div>
              <h3>
                外構工事（エクステリア、塗装など）も請け負っています。
              </h3>
              <p>
                <br />
                芝生の代わりにインターロッキング、生け垣の代わりにブロック塀など、緑を減らしてゆくお客様が多いのは事実です。<br />
                しかし、その無機質なモノの設置に関しても、私たち庭師による「空間美」を提案することで、どこか良いものになると信じております。
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-img
              src="/seko/14.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
          <v-col cols="10">
            <p>
              また、これからの日本では、古き良きものを形を変えて使い続けていくことで、生活の豊かさが広がってゆくと考えています。<br />
              そこで、景観を改修するときに、スクラップ・アンド・ビルドではなく、ヴィンテージにしてゆくのはいかがでしょうか。<br /><br />

              新しいものが絶対に良い、と言える時代は過ぎ去りました。<br /><br />

              近年流行っているSDGs (Sustainable Development Goals)という概念も、これに当てはまると思います。<br />
              お客様が思う理想を相談していただき、より価値のある空間づくりを共にしてゆきたいと思っています。
            </p>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="content-box-dark-responsive content-box-body hidden-md-and-up">
      <h2 class="vertical-text">
        造園
      </h2>

      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center">
          <v-col cols="12">
            <v-img
              src="/zouen/warabocchi.svg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10">
            <h3>
              毎年変わらない素材で、毎年変化を楽しむことができるものとして、正月飾りに「藁ぼっち」を選ぶのも粋ではないでしょうか。
            </h3>
            <p>
              <br />
              藁ぼっちは、稲作における藁の保存方法が由来です。<br />
              その風景から美を見出し、造園では、藁ぼっちを庭の冬化粧として飾り付けています。<br /><br />

              すぐり藁の量や、シュロ縄の結び方で様々な表情を見せます。<br />
              空間に合ったものになるように造り、お客様から毎年好評を頂いています。
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="12">
            <v-img
              src="/zouen/04.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="10" class="d-flex test3" style="height: 500px;">
            <div>
              <h3>
                丸いものは丸く、四角いものは四角く刈り込む。<br />
                樹木それぞれの柔らかさを生かして剪定するのが庭師です。
              </h3>
              <p>
                <br />
                機械式は一切用いず、刈込鋏や剪定鋏で作業します。<br />
                また、乗馬ズボン、手甲、足袋は普段から身につけて作業していますが、冬の庭の手入れのときだけは、半纏（はんてん）を着て作業するほど、庭の手入れには拘りを持っています。<br /><br />

                お客様には、この作業風景も見て、楽しんでいただけると思います。
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="12">
            <v-img
              src="/zouen/06.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="12">
            <v-parallax
              src="/zouen/07.jpg"
              height="700"
            ></v-parallax>
          </v-col>
        </v-row>
      </div>

      <div class="content-box-dark-responsive content-box-body">
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="12">
            <v-img
              src="/zouen/08.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="10">
            <h3>
              寒さから樹を守りつつ、魅せる技術があります。
            </h3>
          </v-col>
        </v-row>
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="12">
            <v-img
              src="/zouen/09.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="10">
            <p>
              ソテツやボタンなど、寒さに弱い樹はそのままでは日本の冬を越すことができません。<br />
              そのために霜除けをします。<br /><br />

              霜除けには「巻き上げ」や「段飾り」などの工法があります。<br />
              近年では、すぐり藁の入手が困難になってきており、使う藁の少ない「巻き上げ」がほとんどです。<br />
              そして最上部には、藁ぼっちで飾り付けをします。<br /><br />

              巻き上げるシュロ縄の角度、幅、わらの膨らみ具合など、美しく魅せる技術が問われます。
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" align="start" class="content-box-body">
          <v-col cols="12">
            <v-img
              src="/zouen/10.jpg"
              :lazy-src="`https://picsum.photos/16/9`"
            >
              <template v-slot:placeholder>
                <LoadingImg />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import Carousel from '~/components/CarouselSeko.vue'
import LoadingImg from '~/components/LoadingImg.vue'

export default {
  components: { Carousel, LoadingImg },
  layout: 'dark',
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '私たち丸明造園は、「庭師を源流とする造園技能を引き継ぐ」少数精鋭集団です。'
      }
    ],
  },
  data() {
    return {
      page: [
        {
          title: '業務内容',
          url: '/works',
        },
      ],
      shokusai: [
        {
          src: 'shokusai/before.svg'
        },
        {
          src: 'shokusai/after.svg'
        }
      ],
      ground: [
        {
          src: 'shokusai/13.jpg'
        },
        {
          src: 'shokusai/14.jpg'
        }
      ],
      entrance: [
        {
          src: 'seko/02.jpg'
        },
        {
          src: 'seko/03.jpg'
        },
        {
          src: 'seko/04.jpg'
        },
      ],
      seko: [
        {
          src: '/seko/05.jpg',
        },
        {
          src: '/seko/06.jpg',
        },
        {
          src: '/seko/07.jpg',
        },
        {
          src: '/seko/08.jpg',
        },
      ],
      trachycarpus: [
        {
          src: 'zouen/08.jpg',
        },
        {
          src: 'zouen/09.jpg',
        },
        {
          src: 'zouen/10.jpg',
        },
      ],
    }
  },
}
</script>



<style scoped lang="scss">
h2 {
  color: white !important;
  font-weight: 800 !important;
  font-size: 32px !important;
  letter-spacing: 8px;
}
h3 {
  color: white !important;
  font-weight: 600 !important;
  font-size: 24px !important;
  // letter-spacing: 8px;
}
p {
  color: white !important;
}
.theme--light.v-divider {
  border-color :rgba(255, 255, 255, 0.12);
}
.test {
  border-radius: 13px;
  padding-left: 1rem;
  margin-left: 1rem;
  position: sticky;
  top: 50%;
  margin: 0% !important;
}
.test2 {
  align-items: end;
}
.test3 {
  align-items: center;
}
</style>
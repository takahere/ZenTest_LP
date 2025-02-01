'use client'

import Image from "next/image";
import { ArrowRight } from 'lucide-react'

const COMPANY_LOGOS = [
  { name: "日本不動産", src: "/career1/logo.svg" },
  { name: "Numu", src: "/career1/logo.svg" },
  { name: "Ninjastars", src: "/career1/logo.svg" },
  { name: "HRBrain", src: "/career1/logo.svg" },
  { name: "モノタロウ", src: "/career1/logo.svg" },
  { name: "BIZREACH", src: "/career1/logo.svg" },
  { name: "Leverages", src: "/career1/logo.svg" },
  { name: "AwesomeAgent", src: "/career1/logo.svg" },
  { name: "Digital Hack", src: "/career1/logo.svg" },
  { name: "TOTAL CREATE", src: "/career1/logo.svg" },
  { name: "CULEN", src: "/career1/logo.svg" },
  { name: "Global Japan", src: "/career1/logo.svg" },
  { name: "アントレ", src: "/career1/logo.svg" },
  { name: "SC", src: "/career1/logo.svg" },
  { name: "BAMV", src: "/career1/logo.svg" },
  { name: "Geekly", src: "/career1/logo.svg" }
];

// Add job listings data
const JOB_LISTINGS = [
  {
    title: "【非公開】※弊社から2名の入社実績有り※\nコンサル未経験OK/外資系コンサル/\n戦略コンサルタント",
    salary: "年収600万円〜",
    monthlySalary: "（月給50万円〜）※前職の年収考慮",
    location: "勤務地：東京",
    note: "登録いただいた方のみ公開"
  },
  {
    title: "【非公開・当社独占】業界未経験多数/\nベンチャー企業『幹部候補』/\n組織コンサル",
    salary: "年収500万円〜800万円",
    monthlySalary: "（月給42万円〜67万円）",
    location: "勤務地：大阪",
    note: "登録いただいた方のみ公開"
  },
  {
    title: "【非公開・弊社独占】\n※枠1名※キャリア採用/\n国内トップSaaS企業/セールス",
    salary: "年収450万円〜750万円",
    monthlySalary: "（月給37.5万円〜62.5万円）",
    location: "勤務地：東京、名古屋、福岡、大阪",
    note: "登録いただいた方のみ公開"
  },
  {
    title: "【非公開】未経験可/\n上場企業平均年収1000万年越え/\nM&Aアドバイザー",
    salary: "年収600万円〜2,000万円",
    monthlySalary: "（月給50万円〜170万円）※インセンティブ有り",
    location: "勤務地：東京、名古屋、福岡、大阪",
    note: "登録いただいた方のみ公開"
  },
  {
    title: "【非公開】キャリア採用/\nデジタルマーケティング/コンサル運用",
    salary: "年収450万円〜700万円",
    monthlySalary: "（月給37.5万円〜58.3万円）",
    location: "勤務地：東京、名古屋、福岡、大阪",
    note: "登録いただいた方のみ公開"
  },
  {
    title: "【非公開】営業企画マネージャー（管理職）/\n国内トップクラスのシェアSaaS/\n新規事業の立ち上げ",
    salary: "年収600万円〜900万円",
    monthlySalary: "（月給50万円〜75万円）",
    location: "勤務地：東京、名古屋、福岡、大阪",
    note: "登録いただいた方のみ公開"
  }
];

const REASONS = [
  {
    id: "01",
    title: "転職相談時のサポートの徹底。\n5回以上の面談を実施！",
    description: "当社では皆様ににキャリアアップ（将来・成長性）を見据えた提案を実践しています。求職者様が抱く思いをひとつひとつ分析し、皆様に新たな発見をご提供することで、業界や職種で転職される事例が多く発生しております。",
    image: "/career1/images/reason1.jpg"
  },
  {
    id: "02",
    title: "転職以外のサポートも充実！",
    description: "入社後のサポートも充実。\nいつでも入社後スムーズにコミニケーション取れる体制を整えてます。\n転職してゴールではなく、転職して活躍するまでサポートもさせていただきます。",
    image: "/career1/images/reason2.jpg"
  },
  {
    id: "03",
    title: "非公開案件を優先的にご案内！",
    description: "初回から会社の役員（社長・取締役）の面談が可能。当社は提携している法人様から非公開案件として、ご紹介いただいております。また、経営陣から直接ご紹介いただいているため、優先的に皆様にご紹介することが可能です。",
    image: "/career1/images/reason3.jpg"
  },
  {
    id: "04",
    title: "20代に特化したキャリア形成に強み・20代で\nキャリアについて話したいかた募集中！",
    description: "人生100年時代、プロとして一人一人の将来のキャリア設計に向き合います。今転職すべきか？しないべきか？などのご相談も可能です。弊社は無理に転職を進めることはございません。転職を決断する前からの行動で、納得のいく転職を実現するために、転職の質を上げるサポートをさせていただきます。",
    image: "/career1/images/reason4.jpg"
  }
];

const SUCCESS_STORIES = [
  {
    title: "外資系Saasベンチャー企業へ転職",
    age: "26歳（男性）",
    before: {
      company: "広告代理店業",
      salary: "450万円"
    },
    after: {
      company: "外資系\nSaasベンチャー企業",
      salary: "550万円"
    },
    thoughts: "大手広告代理店にて営業しておりました。営業では社内にて若手と言われた営業成績ではありましたが、社内にて裁量性のある仕事では社内全体で1位になることができました。ただ組織体制の壁もあり、裁量性がなく、また新しい挑戦の場を探しておりました。ZenMatchを通じて、キャリアの相談を繰り返しながら、共に考えていただき、自分に合った企業を紹介いただきました。",
    image: "/career1/images/success1.jpg"
  },
  {
    title: "IFA企業へ転職",
    age: "29歳（男性）",
    before: {
      company: "大手金融機関",
      salary: "650万円"
    },
    after: {
      company: "IFA企業",
      salary: "2000万円",
      note: "入社1年半年後"
    },
    thoughts: "転職を考えたきっかけは、今後のキャリアを考えたときに幅広い知識と幅広い商品を提供したいと思ったからです。また個人の営業成績が直接自身に反映される働き方をしたくて転職相談に乗っていただきました。また、紹介していただいた友人もいて、自分も頑張りたいと思い、転職しようと思いました。",
    image: "/career1/images/success2.jpg"
  },
  {
    title: "中堅会計コンサルタント会社へ転職",
    age: "28歳（男性）",
    before: {
      company: "事業会社の経理",
      salary: "450万円"
    },
    after: {
      company: "中堅会計\nコンサルタント会社",
      salary: "650万円"
    },
    thoughts: "転職理由はスキルや知識を幅広く学び、年収アップをしたかったからです。経理の実務経験を活かし、会計、財務、税務に関する専門性を深めてスペシャリストを目指すためにコンサルタント会社へと転職しました。将来的に起業を検討しており、今のうちにガンガン吸収したくて、決断しました。",
    image: "/career1/images/success3.jpg"
  },
  {
    title: "日系ITスタートアップの経営企画へ転職",
    age: "27歳（男性）",
    before: {
      company: "外資系IT会社の営業",
      salary: "650万円"
    },
    after: {
      company: "日系ITスタートアップ\nの経営企画",
      salary: "700万円"
    },
    thoughts: "将来は会社経営又は企業したいというビジョンを描き、営業をしながら経営企画の経験も積めるスタートアップへ転職。",
    image: "/career1/images/success4.jpg"
  },
  {
    title: "Web系エンジニア 事業会社へ転職",
    age: "25歳（男性）",
    before: {
      company: "顧客先常駐",
      salary: "350万円"
    },
    after: {
      company: "事業会社",
      salary: "660万円"
    },
    thoughts: "開発プロジェクトによって開発言語がそれぞれ異なることで、エンジニアとしてのスキルが低くなることに懸念を持ち、エンジニアとして技術力を高めることができる事業会社を目指して、転職。",
    image: "/career1/images/success5.jpg"
  }
];

const SUPPORT_STEPS = [
  {
    step: "01",
    title: "無料登録",
    icon: "📝",
    description: "皆様からご登録いただきます。あなたの思いを記載してください。"
  },
  {
    step: "02",
    title: "キャリアアドバイザーから\nご連絡・事前面談",
    icon: "💬",
    description: "1営業日以内にてご返信します。あなたの思いや今後のキャリアについて、教えてください。"
  },
  {
    step: "03",
    title: "非公開求人紹介・\n面談対策・選考",
    icon: "✅",
    description: "興味のある求人に関して、選考を受けていただきます。選考前の事前準備や、面接での注意事項など、事前にご案内させていただきます。"
  },
  {
    step: "04",
    title: "入社",
    icon: "🏢",
    description: "おめでとうございます。活躍されていますか。不安なことないですか。転職後のサポートの実施しています。"
  },
  {
    step: "05",
    title: "アフターフォロー",
    icon: "👥",
    description: "入社後、3ヶ月は毎月1回状況の確認をしています。仕事の悩みなど不安なことがないですか？不満を感じないように確認をさせていただきます。"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-[800px] w-full bg-gradient-to-br from-black to-[#1a1a1a]">
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-12 md:py-0">
            <div className="text-white w-full">
              <p className="text-lg md:text-xl mb-4">20代のキャリアアップにおすすめ</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-col">
                <span className="flex items-center gap-2">
                  年収<span className="text-[#FF6B00] text-5xl md:text-7xl">450</span>万円以上なら
                </span>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-4xl md:text-6xl">ZenMatch</span>
                </div>
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:mt-12">
                <div className="bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://picsum.photos/100/100"
                      alt="Career consultation"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">転職を決断する前から<br />キャリア相談が可能！</h3>
                    <p className="text-sm text-gray-200">人生100年時代、あなたのキャリアの現状と将来の目指すキャリアについて現状の市場価値、キャリアの健康診断が受けれます。</p>
                  </div>
                </div>

                <div className="bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://picsum.photos/100/101"
                      alt="Job opportunities"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">非公開求人3万件以上！</h3>
                    <p className="text-sm text-gray-200">経営者直下求人、優良ベンチャーから大手企業まで多数！カジュアル面談や1次面接にて経営者と話しできる機会を設けています。</p>
                  </div>
                </div>

                <div className="bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <Image
                      src="https://picsum.photos/100/102"
                      alt="One on one support"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">1 on 1<br />コミット型支援！</h3>
                    <p className="text-sm text-gray-200">求職者側と企業側双方のニーズを把握できる体制。</p>
                  </div>
                </div>

                <div className="bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
                      src="https://picsum.photos/100/103"
                      alt="Post-employment support"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">入社後活躍を重視！</h3>
                    <p className="text-sm text-gray-200">入社後に活躍できるかまたその後のキャリアにつながるかを支援しております。長いキャリアを通して、生涯キャリアのサポートをできるよう目前の方のサポートをしております。</p>
                  </div>
                </div>
              </div>

              <button className="bg-[#FF6B00] text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all mt-8">
                無料相談を予約する
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">今すぐ転職をお考えの方！</h2>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">すぐにでも挑戦したい方！</h2>
              <p className="text-gray-600">-当社役員が直接カウンセリング-</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">氏名</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  placeholder="石井"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label htmlFor="age" className="block text-gray-700 mb-2">年齢</label>
                  <input
                    type="number"
                    id="age"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    placeholder="19"
                  />
                </div>
                <span className="mt-8">歳</span>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  placeholder="admin@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">電話番号</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  placeholder="08041851401"
                />
              </div>

              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 text-[#FF6B00] border-gray-300 rounded focus:ring-[#FF6B00]"
                />
                <label htmlFor="privacy" className="text-gray-700">
                  個人情報の利用・取り扱いに同意する
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B84141] text-white py-4 px-8 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                無料キャリア相談する
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-8 md:py-12 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">ご紹介企業一覧</h2>
          
          {/* Logo Slider - First Row */}
          <div className="flex space-x-8 animate-marquee whitespace-nowrap mb-8">
            <div className="flex space-x-8">
              {COMPANY_LOGOS.slice(0, 8).map((logo, index) => (
                <div key={index} className="flex items-center justify-center bg-white rounded-lg w-40 h-20 flex-shrink-0">
                  <span className="text-black font-bold">{logo.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex space-x-8">
              {COMPANY_LOGOS.slice(0, 8).map((logo, index) => (
                <div key={`dup1-${index}`} className="flex items-center justify-center bg-white rounded-lg w-40 h-20 flex-shrink-0">
                  <span className="text-black font-bold">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Slider - Second Row */}
          <div className="flex space-x-8 animate-marquee2 whitespace-nowrap">
            <div className="flex space-x-8">
              {COMPANY_LOGOS.slice(8).map((logo, index) => (
                <div key={index} className="flex items-center justify-center bg-white rounded-lg w-40 h-20 flex-shrink-0">
                  <span className="text-black font-bold">{logo.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex space-x-8">
              {COMPANY_LOGOS.slice(8).map((logo, index) => (
                <div key={`dup2-${index}`} className="flex items-center justify-center bg-white rounded-lg w-40 h-20 flex-shrink-0">
                  <span className="text-black font-bold">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm mt-8 text-gray-400">※企業例は、取引先のある企業様のほんの一部です。</p>

          <div className="text-center mt-12">
            <div className="inline-flex flex-col items-center">
              <p className="text-sm mb-4">専門アドバイザーに相談してみる</p>
              <a
                href="#contact-form"
                className="bg-[#B84141] text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
              >
                無料キャリア相談はこちら
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm mt-2 text-gray-400">03-6820-0915（土日祝対応：全日9時〜21時）</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-12 md:py-16 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-white flex-1 hidden md:block"></div>
              <h2 className="text-xl md:text-2xl font-bold whitespace-normal md:whitespace-nowrap px-4">単月でご紹介企業80社ずつ増加！</h2>
              <div className="h-px bg-white flex-1 hidden md:block"></div>
            </div>
            <p className="text-xl">すべて非公開案件で社長・役員直下案件も多数！</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOB_LISTINGS.map((job, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold mb-4 whitespace-pre-line">{job.title}</h3>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-[#c4a061]">{job.salary}</p>
                  <p className="text-lg text-[#c4a061]">{job.monthlySalary}</p>
                  <p className="text-gray-300">{job.location}</p>
                  <p className="text-gray-400 text-sm">{job.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Questions Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg mb-2">いつから転職活動の準備すべきか、キャリアで迷い、転職するか迷ってる『あなた』</p>
            <p className="text-lg mb-4">人生100年時代、将来のキャリアについて</p>
            <h2 className="text-3xl font-bold text-[#8B4513]">専属のキャリア専門パートナーはいらっしゃいますか？</h2>
          </div>

          <div className="space-y-4">
            {[
              "起業/事業の立ち上げを将来したい",
              "実績は残せたので、もっと裁量の大きい職場でチャレンジしたい",
              "キャリア設計の相談や現在の自分の市場価値を知りたい",
              "自分自身の可能性をもっと活かしたい",
              "年収をもっと上げたい、上げるための方法や今何をすべきか相談したい"
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg flex items-center gap-4 transform hover:-translate-y-1 transition-all"
              >
                <span className="text-2xl font-bold text-[#8B4513] min-w-[2.5rem]">{index + 1}.</span>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact-form"
              className="bg-[#B84141] text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
            >
              無料キャリア相談はこちら
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* RYOMA Promise Section */}
      <section className="py-16 bg-[#1a1a1a] text-white relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-[#8B6E4F] text-white px-12 py-3 rounded-lg text-2xl font-bold">
            ご安心ください！
          </div>
          <div className="w-8 h-8 bg-[#8B6E4F] transform rotate-45 absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 mb-16">
            <p className="text-xl">RYOMAでは「働く人のキャリアを照らす」というミッションのもと、</p>
            <p className="text-xl">あなたの思いを大切にし、すべての思いを実現します。</p>
            <p className="text-xl">また、当社では3つの大切にしている考えに則り、皆様にとって、</p>
            <p className="text-xl">最適なキャリアとなりますよう運営しているため、皆様の大切な思いの実現が可能です。</p>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                text: "企業、求職者、社内のメンバー、全て相手のことを思いやった行動をする"
              },
              {
                number: "02",
                text: "全ては自分次第。個人が自立したプロフェッショナルとして、自由と責任を楽しむ。"
              },
              {
                number: "03",
                text: "恐れずに挑戦をすることで、企業、求職者、自分の未来を切り開く。"
              }
            ].map((promise, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/10 rounded-lg p-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/career1/promise-badge.svg"
                    alt={`Promise ${promise.number}`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg text-left">{promise.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Reasons Section */}
      <section className="py-16 bg-[#1a1a1a] text-white" id="reasons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            さらに、当社が実現できる<span className="text-[#c4a061]">4</span>つの理由
          </h2>

          <div className="space-y-20">
            {REASONS.map((reason, index) => (
              <div key={reason.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="bg-[#2a2a2a] inline-block px-6 py-2 rounded-lg">
                    <h3 className="text-[#c4a061] text-2xl font-bold">reason{reason.id}</h3>
                  </div>
                  <h4 className="text-xl font-bold whitespace-pre-line">{reason.title}</h4>
                  <p className="text-gray-300 whitespace-pre-line">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 md:py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">当社転職実績</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12">弊社で転職を実現された方を一部ご紹介いたします。</p>

          <div className="space-y-8 md:space-y-12">
            {SUCCESS_STORIES.map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-[#C4A061] text-white p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
                    <h3 className="text-lg md:text-xl font-bold">{story.title}</h3>
                    <span className="text-base md:text-lg">{story.age}</span>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-center">
                    <div className="md:col-span-4">
                      <div className="relative aspect-[4/3] w-full">
          <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-8">
                      <div className="flex items-center gap-8 mb-8">
                        <div className="bg-gray-100 p-4 rounded-lg text-center flex-1">
                          <p className="text-gray-600 mb-2">Before</p>
                          <div className="space-y-2">
                            <p className="font-bold">{story.before.company}</p>
                            <p className="text-2xl font-bold">年収{story.before.salary}</p>
                          </div>
                        </div>
                        <div className="text-4xl text-gray-400">→</div>
                        <div className="bg-gray-100 p-4 rounded-lg text-center flex-1">
                          <p className="text-gray-600 mb-2">After</p>
                          <div className="space-y-2">
                            <p className="font-bold whitespace-pre-line">{story.after.company}</p>
                            <p className="text-2xl font-bold">年収{story.after.salary}</p>
                            {story.after.note && (
                              <p className="text-sm text-gray-500">{story.after.note}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">キャリアへの思い</h4>
                        <p className="text-gray-600">{story.thoughts}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Support Flow Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">キャリアサポートの流れ</h2>
          <p className="text-center text-gray-600 mb-12">弊社専門アドバイザーが、入社後もサポート致します。</p>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#C4A061] -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {SUPPORT_STEPS.map((step, index) => (
                <div key={index} className="relative flex flex-col h-full">
                  <div className="bg-[#C4A061] text-white px-4 py-2 inline-block rounded-lg mb-4">
                    <span className="font-bold">STEP {step.step}</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 flex flex-col flex-grow">
                    <div className="text-center mb-4">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 whitespace-pre-line">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-[#C4A061] mb-8">最短2日で最適な環境へご案内いたします！</p>
            <div className="inline-flex flex-col items-center">
              <p className="text-sm mb-4">専門アドバイザーに相談してみる</p>
              <a
                href="#contact-form"
                className="bg-[#B84141] text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
              >
                無料キャリア相談はこちら
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm mt-2 text-gray-600">03-6820-0915（土日祝対応：全日9時〜21時）</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-800">皆様からいただく</span>
            <br />
            <span>よくあるご質問</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#C4A061] p-4">
                <h3 className="text-white font-bold text-lg">●キャリアについて</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">裁量権を持った働きかいを求めたいのですが、可能ですか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>個々人に合わせた、オーダーメイド型にて支援させていただきます！キャリてらでは成長産業、成長企業、ベンチャー企業の求人を数多く取り揃えており、最も挑戦的な環境もご用意可能でございます。また、どのような裁量権を希望しているのかを深くヒアリングさせていただき、皆様に適合した環境をご案内いたします！また女性の求職者様には女性のアドバイザーがしっかりヒアリングをしますのでご安心ください。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">挑戦したいと思っていますが、今の自分は転職した方が良いですか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>無理に転職を進めません。転職すべきかどうかお話しいましょう。転職とは、キャリアの頭打ち・思考や価値観の変化によって生まれます。その為、安易な転職と無理をしてまで転職をする必要までは思っておりません。<br />「転職すべきタイミングなのかどうか知りたい、自分の市場価値を上げるにはどうすべきか知りたい」このようなご質問でも受け付けております。<br />個人の人生観と社会情勢から最適なタイミングをお伝えします。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">学歴がなく経験もないのですが、大丈夫ですか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>勿論大丈夫です。当社コンサルタントがサポートさせていただき、共に先のキャリアを考えていただけます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details FAQ Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-800">サービスの中身について</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#C4A061] p-4">
                <h3 className="text-white font-bold text-lg">●サービスの中身について</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">ZenMatchとはどんなサービスですか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>当社サービスは主にU30に特化し、20代、第二新卒で成長・挑戦したい環境や年収をアップしたい方にぴったりなサービスです。業種や職種を問わず、約12,000以上の法人様の求人の中から皆様に適した求人をご提案いたします。経験の有無に限らず応募できる求人が多く、20代の挑戦をサポートするサービスです。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">どのような方がZenMatchを使用されますか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>もちろん30代以上の方もご利用いただいておりますが、主に男性女性の20歳〜29歳の方々を中心にご利用いただいております。<br />「成長したいけど、このままでいいのかな」「もっと挑戦したい」「成果主義の会社がいい」「もっと安定した会社がいい」など様々な思いをお持ちです。<br />決して皆様のお考えを否定することなく、皆様の価値観に沿って、今後のキャリアアップにお手伝いさせていただいております。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">利用するのに料金はかかりますか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>ご安心ください。料金は一切かかりません。<br />本サイトから提供するさまざまなサービスがすべて無料でご利用いただけます。<br />また、キャリアに関する相談もすべて無料ですし、内定後のフォローも無料で実施していますので、ご安心ください。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">職歴が浅いので職務経歴書に書くことがほとんどないのですが、その場合、職務経歴書にはどんなことを書けばよいでしょうか</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>全く問題ございません。<br />ただかに、就業期間が短い第二新卒者・20代の方は「大した実績や成果がなく、職務内容を書くことができない」と悩まれる方は多いです。<br />しかし、採用する側の企業は、第二新卒者に対して大きな実績や成果を求めていません。社会人経験が2〜3年ではまだまだ実績や成果がなくても当たり前なのです。当社では採用担当者が、第二新卒の職務経歴書のどこを見ているのかをサポートし、経験が浅い場合の職務経歴書の書き方についても弊社コンサルタントからアドバイスを実施しながら、お取組みいただけますので、ご安心ください。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career FAQ Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-800">キャリアについて</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#C4A061] p-4">
                <h3 className="text-white font-bold text-lg">●キャリアについて</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">裁量権を持った働きかいを求めたいのですが、可能ですか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>個々人に合わせた、オーダーメイド型にて支援させていただきます！キャリてらでは成長産業、成長企業、ベンチャー企業の求人を数多く取り揃えており、最も挑戦的な環境もご用意可能でございます。また、どのような裁量権を希望しているのかを深くヒアリングさせていただき、皆様に適合した環境をご案内いたします！また女性の求職者様には女性のアドバイザーがしっかりヒアリングをしますのでご安心ください。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">挑戦したいと思っていますが、今の自分は転職した方が良いですか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>無理に転職を進めません。転職すべきかどうかお話しいましょう。転職とは、キャリアの頭打ち・思考や価値観の変化によって生まれます。その為、安易な転職と無理をしてまで転職をする必要までは思っておりません。<br />「転職すべきタイミングなのかどうか知りたい、自分の市場価値を上げるにはどうすべきか知りたい」このようなご質問でも受け付けております。<br />個人の人生観と社会情勢から最適なタイミングをお伝えします。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#C4A061] text-white rounded-full flex items-center justify-center font-bold">Q</div>
                    <p className="font-bold">学歴がなく経験もないのですが、大丈夫ですか？</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">A</div>
                    <p>勿論大丈夫です。当社コンサルタントがサポートさせていただき、共に先のキャリアを考えていただけます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisor Consultation Section */}
      <section className="py-16 bg-[#C4A061]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <div className="relative mb-8">
                <div className="text-black text-lg mb-4">専門アドバイザーに相談してみる</div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1px] h-12 bg-black rotate-[30deg] top-[140%]"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1px] h-12 bg-black -rotate-[30deg] top-[140%]"></div>
              </div>
              <a
                href="#contact-form"
                className="bg-[#B84141] text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 mb-4"
              >
                無料キャリア相談はこちら
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="text-black">03-6820-0915（土日祝対応：全日9時〜21時）</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 bg-white" id="message">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-16">
            <h2 className="text-4xl font-bold text-center">
              <span className="relative">
                代表メッセージ
                <span className="absolute -z-10 text-8xl text-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                  Message
                </span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#C4A061] leading-relaxed">
                転職してすぐによかった、と思える<br />
                転職サポートではなく、頑張りたいと<br />
                思える場所をご紹介させていただきたい。
              </h3>
              <div className="text-right">
                <p className="text-lg">株式会社ZenX 代表取締役 阿阪晃貴</p>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>私は常に2つの軸を持ちながら経営しています。まず求職者の皆様、特に若手がイキイキと働いていないといけないと感じています。人生の大半を締める【仕事】こそが自分自身の人生を左右すると感じております。その中でも、若手の働く人に職業選択に関して、より良い考え方を知って欲しいと思ってます。</p>
                <p>入社後にGAPを感じた「リアリティショック」が76%、新卒で入社後3年以内の離職率が約30%、20代で仕事観（なぜ仕事をするかという考え）を持っている人が11%、若い世代がいかに良い職業選択ができてないか、このデータから感じ取れます。仕事選びで人生をよりよくする人を増やしたいと思っております。</p>
                <p>もうひとつが、エージェントという仕事を通じて、成し遂げたいという思いです。実際に私の人生を変えたのはエージェントとの出会いでした。キャリアの歩み方がわからなかった私に対し、市場価値のあげ方を教えていただき、将来の理想のキャリアが明確になりました。そして、その人生を変えた経験を逆の立場になって、伝えられるエージェントという立場はとてもやりがいのある仕事だと思ってます。毎回面談する時に意識しているのは「3年後に感謝されること」です。20代の転職では、転職してすぐに人生が良くなることはありません。私も転職して年収が200万円下がりました。「頑張りたいと思える場所」を提供されたことで、楽しく前向きに仕事に向かうことができ、今では会社経営ができるところまで成長しました。転職してすぐによかった、と思える転職サポートではなく、頑張りたいと思える場所を紹介し、そこで成長を遂げることで3年後に、あの時転職してよかった、と思っていただけるように全力で協力に寄与していく所存です。</p>
              </div>
            </div>
            <div className="relative aspect-[3/4]">
          <Image
                src="/career1/images/ceo.jpg"
                alt="CEO"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 bg-[#f5f5f5]" id="company">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-16">
            <h2 className="text-4xl font-bold text-center">
              <span className="relative">
                運営会社
                <span className="absolute -z-10 text-8xl text-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                  Company
                </span>
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">会社名</div>
                    <div>株式会社ZenX</div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">年月日</div>
                    <div>2021年7月</div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">資本金</div>
                    <div>500万円</div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">役員一覧</div>
                    <div>
                      <p>代表取締役 阿阪晃貴</p>
                      <p>取締役 金田健</p>
                    </div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">主要取引銀行</div>
                    <div>
                      <p>きらぼし銀行 日本橋支店</p>
                      <p>三菱UFJ銀行 虎ノ門ヒルズ支店</p>
                    </div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">従業員数</div>
                    <div>38名（業務委託・アルバイト含む）</div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">顧問税理士</div>
                    <div>エバーグリーン税理士法人</div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">顧問弁護士</div>
                    <div>西浦・西中山法律事務所</div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-8">
                    <div className="w-24 text-gray-600">事業内容</div>
                    <div>
                      <p>メディアの運営</p>
                      <p>転職支援事業</p>
                      <p>人事コンサル【ワンストップHR】</p>
                    </div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">個人情報の取り扱いについて</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 space-y-6 text-gray-700 h-[200px] overflow-y-auto text-xs">
              <p>株式会社ZenX（以下、「当社」といいます）は、個人情報が個人の重要な財産であることを認識し、個人情報を適切に取得・利用し、個人情報に関する法令等を遵守し、個人情報の漏えい等を防止・是正するため、以下のとおり個人情報の取扱方針を定め、細心の注意を払って管理運用します。</p>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第１条（適切な取得と利用目的）</h3>
                <p>当社は適法な手段により、以下の利用目的のため、個人情報を取得します。なお、以下にかかわらず、取得時に利用目的を別途明示した場合には、明示された目的においても利用することがあります。</p>
                <div className="pl-4">
                  <h4 className="font-bold">＜基本的な利用目的＞</h4>
                  <ul className="list-disc pl-6">
                    <li>ご本人への連絡のため</li>
                    <li>ご本人からのお問い合わせの際の本人確認その他の対応のため</li>
                  </ul>

                  <h4 className="font-bold mt-4">＜当社とのお取引・当社サービス全般に関連して取得した個人情報の利用目的＞</h4>
                  <ul className="list-disc pl-6">
                    <li>当社サービスの提供のため</li>
                    <li>現在提供している当社サービスまたは今後提供を検討している当社サービスの案内及びアンケート実施のため</li>
                    <li>サービスの改善や新サービスの開発等に役立てるため</li>
                    <li>キャンペーン等の抽選及び賞品や商品発送のため</li>
                    <li>当社または当社以外の第三者が広告主となる広告情報等の配信のため</li>
                    <li>当社サービスの利用に関する統計データの作成のため</li>
                  </ul>

                  <h4 className="font-bold mt-4">＜セミナー、イベント等に関連して取得した個人情報の利用目的＞</h4>
                  <ul className="list-disc pl-6">
                    <li>セミナー、イベント等に関する情報提供のため</li>
                    <li>セミナー、イベント等の運営および管理のため</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第２条（適正な管理と保護）</h3>
                <p>個人情報の管理は、厳重に行うこととし、個人情報に関する不正アクセス、紛失、破壊、改ざん、漏洩を防ぐための適切な予防および是正処置を行います。</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第３条（預託）</h3>
                <p>当社は利用目的の達成に必要な範囲内において、取得した個人情報の全部または一部を業務委託先に預託することがあります。その際、業務委託先としての適格性を十分審査するとともに、契約にあたって守秘義務に関する事項等を規定し、業務委託先に対し必要かつ適切な監督を行います。</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第４条（第三者提供）</h3>
                <p>当社は、以下の場合を除き、第三者に対しデータを開示・提供することはいたしません。</p>
                <ul className="list-disc pl-6">
                  <li>ご本人が事前に同意した場合</li>
                  <li>法律に基づく場合</li>
                  <li>当社サービスの利用規約の違反があり、当社の権利、財産やサービスなどを保護するために、個人情報を公開せざるをえないと判断するに足る十分な根拠がある場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難である場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難である場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
                  <li>合併、会社分割、営業譲渡その他の事由によって個人情報の提供を含む当社の事業の承継が行われる場合</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第５条（共同利用）</h3>
                <p>当社は、当社サービスの提供にあたり、当社の業務提携先と個人情報を共同利用することがあります。この場合に当社は、共同利用に先立ち、共同して利用する個人情報の項目、共同利用者の範囲、共同利用する個人情報の利用目的、共同利用する個人情報の管理責任者の氏名又は名称についてあらかじめ公表いたします。</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第６条（１８歳未満の未成年者の利用について）</h3>
                <p>１８歳未満の方が個人情報を提供される場合には、保護者の方の同意のもとに行っていただけますようお願いいたします。</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第７条（開示等の手続）</h3>
                <p>当社は、ご本人からの（ご自身の）個人情報の利用目的の通知、開示、内容の訂正、追加または削除、利用の停止、消去および第三者提供の停止（以下「開示等」といいます）のお申し出に対して、遅滞なく応じます。<br />なお、開示等の請求は当社所定の手続きにて行っていただく必要がございます。</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第８条（免責）</h3>
                <p>当社は、ご本人が当社サービスの機能その他手段を用いて第三者に個人情報を明らかにした場合、ご本人が当社サービス上にて開示した情報等により個人を識別できてしまった場合には、何ら責任を負わないものとします。</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第９条（統計データの作成及び利用）</h3>
                <p>当社は、取得した個人情報をもとに個人を識別できないように加工した統計データを作成することがあります。個人を識別できないように加工した統計データの作成・利用につきましては、当社は何らの制限なく行うことができるものとします。</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第１０条（属性情報・行動履歴等の取得・利用）</h3>
                <p>当社は、当社サービスや広告の内容をよりご本人に適したものとするために、以下を例とする個人を識別できない情報の取得・利用を行うことがあります。また、同様の目的で広告主や情報提供元、サービス提供元などに提供する場合があります。</p>
                <ul className="list-disc pl-6">
                  <li>クッキー、ログ、アクセスしたURL、コンテンツ、参照順などの行動履歴</li>
                  <li>端末の個体識別情報などの機器情報</li>
                  <li>ご本人の性別、職業、年齢などの属性情報</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第１１条（改定）</h3>
                <p>当社は、当プライバシーポリシーの全部または一部を改定することがあります。重要な変更がある場合には、改定内容を当社ウェブサイト上で告知いたします。</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">第１２条（問い合わせ先）</h3>
                <p>当社は、本人からの個人情報の取扱いに関する問い合わせに対し、適切な対応を努めます。当社の個人情報の取扱いに関するお問い合わせは、下記にご連絡ください。</p>
                <div className="mt-4">
                  <p>株式会社ZenX</p>
                  <p>個人情報管理担当</p>
                  <p>cs@zex.jp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex items-center">
          <Image
                src="/logo.svg"
                alt="ZenMatch"
                width={32}
                height={32}
                className="mr-2 md:w-10 md:h-10"
              />
              <span className="text-lg md:text-xl font-bold">ZenMatch</span>
            </div>
            <nav className="w-full md:w-auto">
              <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <li>
                  <a href="#reasons" className="hover:text-[#C4A061] transition-colors text-sm md:text-base">実現できる4つの理由</a>
                </li>
                <li>
                  <a href="#message" className="hover:text-[#C4A061] transition-colors text-sm md:text-base">代表メッセージ</a>
                </li>
                <li>
                  <a href="#company" className="hover:text-[#C4A061] transition-colors text-sm md:text-base">会社紹介</a>
                </li>
                <li>
                  <a href="#contact-form" className="hover:text-[#C4A061] transition-colors text-sm md:text-base">無料キャリア相談</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center mt-6 md:mt-8">
            <p className="text-sm md:text-base">© 2022 株式会社ZenX Copyright All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

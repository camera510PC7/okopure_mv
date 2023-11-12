

window.onload = (event) => {
    const mv_list_str = JSON.stringify(mv_list);
    const mv_list_json = JSON.parse(mv_list_str);
   
    const rand = Math.floor(Math.random() * Object.keys(mv_list_json).length);
    const url = Object.values(mv_list_json[rand]).toString();
    document.location = url;
}

const mv_list =
        [
            {"pink pop": "https://www.youtube.com/watch?v=CoXJIR0M3uI"},
            {"Change The World": "https://www.youtube.com/watch?v=Le_RtRO5XCM"},
            {"進化論": "https://www.youtube.com/watch?v=9Tx495bzWjI"},
            {"Ms.ヒネクレディブル": "https://www.youtube.com/watch?v=OhFyfbxDcMs"},
            {"Gr8st Escape": "https://www.youtube.com/watch?v=Ql9VvIAx2t0"},
            {"おこぷれの歌": "https://www.youtube.com/watch?v=j6cnNmT9P7I&t=1208s"},
            {"シングルベル": "https://www.youtube.com/watch?v=nWxtD3BjOjY"},
            {"ミライギア": "https://www.youtube.com/watch?v=dWH2XS0_UKA"},
            {"ドッキリDONDON大作戦": "https://www.youtube.com/watch?v=bzhNfPJssHw"},
            {"サマースパークル": "https://www.youtube.com/watch?v=adbLXmKGFL0"},
            {"キュン下さい": "https://www.youtube.com/watch?v=0YUUUUrJ-f8"},
            {"Boo To You":"https://www.youtube.com/watch?v=SUQf6dnkI9Y"},
            {"おこぷれの歌 2.0": "https://www.youtube.com/watch?v=eQJT8gmKjt4"},
            {"ルテンソフィ": "https://www.youtube.com/watch?v=D2FUKC80fDE"},
            {"ナツ☆アゲ": "https://www.youtube.com/watch?v=ZS1xxBDVYK4&t=86s"},
            {"絶蝶唄":"https://www.youtube.com/watch?v=vbQ6S020tKQ"},
            {"ハッピースパイラル": "https://www.youtube.com/watch?v=GH0eVVTDrUk"},
            {"スイム":"https://www.youtube.com/watch?v=vXNZuL4Ewsc&t=2428s"},
            {"花火の行方":"https://www.youtube.com/watch?v=c6cbsE7v2aQ"},
            {"おこぷれボンバイエ":"https://www.youtube.com/watch?v=7v4hzuRiJhQ"},
            {"君へ": "https://www.youtube.com/watch?v=USzmL_jYOm0"},
            {"Love Game":"https://www.youtube.com/watch?v=wJoSLKOEHxk"},
            {"ねっちゅーしょーさまー":"https://www.youtube.com/watch?v=5jbhrUhXuns"},
            {"トキメキはスローモーション":"https://www.youtube.com/watch?v=WnGTUxOfYD8"},
            {"SiX STARS":"https://www.youtube.com/watch?v=MT7z_TYX3-Q"},
        ]
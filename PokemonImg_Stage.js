 //스테이지별 등장 포켓몬들의 이미지 경로 배열(★스테이지 인덱스 기준)

let pokemonImg_Stage=[
    //스테이지 1(index=0)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png"],

    //스테이지 2(index=1)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png"],

    //스테이지 3(index=2)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png",
    "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png"],

    //스테이지 4(index=3)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png",
    "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png",
    "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png"],

    //스테이지 5(index=4)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png",
    "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png",
    "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png",
    "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png"],

    //스테이지 6(index=5)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png",
    "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png",
    "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png",
    "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png",
    "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png"],

    //스테이지 7(index=6)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png",
    "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png",
    "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png",
    "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png",
    "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png",
    "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png"],

    //스테이지 8(index=7)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png",
    "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png",
    "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png",
    "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png",
    "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png",
    "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png",
    "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png"],

    //스테이지 9(index=8)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png",
    "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png",
    "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png",
    "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png",
    "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png",
    "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png",
    "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png",
    "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png"],

    //스테이지 10(index=9)
    ["po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png", "po1.png",
    "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png", "po2.png",
    "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png", "po3.png",
    "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png", "po4.png",
    "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png", "po5.png",
    "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png", "po6.png",
    "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png", "po7.png",
    "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png", "po8.png",
    "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png", "po9.png",
    "po10.png", "po10.png", "po10.png", "po10.png", "po10.png", "po10.png", "po10.png", "po10.png", "po10.png", "po10.png"]
];
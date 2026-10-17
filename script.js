/* =====================================================
   KOD AJANI
   ROBOTİK KODLAMA MACERASI
===================================================== */


/* =====================================================
   BÖLÜMLER VE GÖREVLER
===================================================== */

const regions = [

    /* =================================================
       BÖLÜM 1
    ================================================= */

    {

        id: 1,

        name: "KOD AJANI ÜSSÜ",

        icon: "🤖",

        description:
            "Kod ajanı eğitim sistemine giriş yap. Algoritma, komut sırası ve problem çözme becerilerini test.",

        missions: [

            {

                id: 1,

                icon: "🔢",

                title: "Komut Sırası",

                description:
                    "Robotun doğru hareket sırasını belirle.",

                question:
                    "Robotun başlangıç noktasından hedefe gitmesi gerekiyor. İlk olarak ne yapmalıdır?",

                options: [

                    "Hedefi belirlemek",

                    "Rastgele hareket etmek",

                    "Programı silmek",

                    "Robotu kapatmak"

                ],

                answer: 0

            },


            {

                id: 2,

                icon: "🧠",

                title: "Algoritmayı Oluştur",

                description:
                    "Doğru işlem sırasını bul.",

                question:
                    "Bir robotun çalışması için aşağıdakilerden hangisi doğru sırayı ifade eder?",

                options: [

                    "Komut → Uygulama → Sonuç",

                    "Sonuç → Komut → Uygulama",

                    "Uygulama → Sonuç → Komut",

                    "Sonuç → Uygulama → Komut"

                ],

                answer: 0

            },


            {

                id: 3,

                icon: "🐞",

                title: "Hatalı Komut",

                description:
                    "Algoritmadaki problemi bul.",

                question:
                    "Robotun 3 adım ileri gitmesi gerekiyor. Programda 'İleri, Geri, İleri' komutları var. Problem nedir?",

                options: [

                    "Geri komutu yanlış",

                    "Robot fazla hızlı",

                    "İleri komutu çalışmaz",

                    "Program çok kısa"

                ],

                answer: 0

            },


            {

                id: 4,

                icon: "🎯",

                title: "İlk Görev",

                description:
                    "Öğrendiklerini birleştir.",

                question:
                    "Bir algoritmanın en önemli özelliklerinden biri hangisidir?",

                options: [

                    "Adımların belirli bir sırada olması",

                    "Çok uzun olması",

                    "Rastgele olması",

                    "Sadece robotlarda kullanılması"

                ],

                answer: 0

            }

        ]

    },


    /* =================================================
       BÖLÜM 2
    ================================================= */

    {

        id: 2,

        name: "AKILLI ŞEHİR",

        icon: "🏙️",

        description:
            "Akıllı şehir sistemlerinde robotlar çevrelerinden gelen bilgilere göre karar verir.",

        missions: [

            {

                id: 1,

                icon: "🚦",

                title: "Trafik Kararı",

                description:
                    "Robot doğru kararı vermeli.",

                question:
                    "Trafik ışığı kırmızıysa otonom araç ne yapmalıdır?",

                options: [

                    "Durmalı",

                    "Hızlanmalı",

                    "Geri gitmeli",

                    "Rastgele dönmeli"

                ],

                answer: 0

            },


            {

                id: 2,

                icon: "📡",

                title: "Sensör Kararı",

                description:
                    "Sensörden gelen bilgiyi yorumla.",

                question:
                    "Robot önünde engel algılarsa hangi karar daha doğrudur?",

                options: [

                    "Dur veya yön değiştir",

                    "Engelin içinden geç",

                    "Hızı artır",

                    "Sensörü kapat"

                ],

                answer: 0

            },


            {

                id: 3,

                icon: "🔀",

                title: "IF / ELSE",

                description:
                    "Koşullu düşün.",

                question:
                    "EĞER pil düşükse robot ne yapmalıdır?",

                options: [

                    "Şarj istasyonuna git",

                    "Daha hızlı hareket et",

                    "Sensörleri kapat",

                    "Görevi tamamen unut"

                ],

                answer: 0

            },


            {

                id: 4,

                icon: "🚨",

                title: "Acil Durum",

                description:
                    "Doğru koşulu seç.",

                question:
                    "Bir robot hem engel hem de kırmızı ışık algılarsa ne yapmalıdır?",

                options: [

                    "Güvenli şekilde durmalı",

                    "Hızlanmalı",

                    "Rastgele hareket etmeli",

                    "Sensörleri yok saymalı"

                ],

                answer: 0

            }

        ]

    },


    /* =================================================
       BÖLÜM 3
    ================================================= */

    {

        id: 3,

        name: "ROBOT FABRİKASI",

        icon: "🏭",

        description:
            "Robot fabrikasına giriş yap. Döngüler, tekrar eden işlemler ve verimli algoritmalar seni bekliyor.",

        missions: [

            {

                id: 1,

                icon: "🔁",

                title: "Döngüyü Bul",

                description:
                    "Tekrar eden işlemi keşfet.",

                question:
                    "Bir robotun aynı hareketi 10 kez yapması gerekiyorsa hangi yapı kullanılabilir?",

                options: [

                    "Döngü",

                    "Rastgele komut",

                    "Kapatma komutu",

                    "Silme işlemi"

                ],

                answer: 0

            },


            {

                id: 2,

                icon: "🔢",

                title: "Tekrar Sayısı",

                description:
                    "Doğru tekrar miktarını seç.",

                question:
                    "Robot 5 kez ileri gitmelidir. Döngü kaç kez çalışmalıdır?",

                options: [

                    "5",

                    "2",

                    "10",

                    "1"

                ],

                answer: 0

            },


            {

                id: 3,

                icon: "⚡",

                title: "Verimli Kod",

                description:
                    "Daha kısa çözümü bul.",

                question:
                    "İleri, İleri, İleri, İleri komutlarını daha verimli nasıl yazabiliriz?",

                options: [

                    "4 kez tekrarla",

                    "Komutları sil",

                    "Robotu kapat",

                    "Rastgele çalıştır"

                ],

                answer: 0

            },


            {

                id: 4,

                icon: "🐞",

                title: "Fabrika Hatası",

                description:
                    "Robotun neden yanlış yaptığını bul.",

                question:
                    "Robot bir hareketi olması gerekenden fazla tekrar ediyor. İlk olarak ne kontrol edilmelidir?",

                options: [

                    "Döngünün tekrar sayısı",

                    "Robotun rengi",

                    "Ekranın parlaklığı",

                    "Robotun adı"

                ],

                answer: 0

            }

        ]

    },


    /* =================================================
       BÖLÜM 4
    ================================================= */

    {

        id: 4,

        name: "TEKNOLOJİ MERKEZİ",

        icon: "🛰️",

        description:
            "Robotların veri ve koşulları kullanarak karmaşık kararlar verdiği teknoloji merkezine ulaş.",

        missions: [

            {

                id: 1,

                icon: "💾",

                title: "Veriyi Kullan",

                description:
                    "Robotun aldığı bilgiyi yorumla.",

                question:
                    "Bir robotun sensöründen gelen bilgi ne için kullanılabilir?",

                options: [

                    "Karar vermek",

                    "Robotun rengini değiştirmek",

                    "Ekranı kapatmak",

                    "Kodu silmek"

                ],

                answer: 0

            },


            {

                id: 2,

                icon: "🧩",

                title: "Koşulları Birleştir",

                description:
                    "Birden fazla koşulu düşün.",

                question:
                    "Robotun hareket etmesi için yol açık VE pil yeterli olmalıdır. Bu durumda hangi mantık kullanılır?",

                options: [

                    "VE",

                    "VEYA",

                    "DEĞİL",

                    "RASTGELE"

                ],

                answer: 0

            },


            {

                id: 3,

                icon: "🔍",

                title: "Sistemi İncele",

                description:
                    "Problemin kaynağını bul.",

                question:
                    "Robot doğru komutları aldığı halde çalışmıyor. İlk kontrol edilmesi gerekenlerden biri nedir?",

                options: [

                    "Güç bağlantısı",

                    "Robotun adı",

                    "Ekran rengi",

                    "Haritanın büyüklüğü"

                ],

                answer: 0

            },


            {

                id: 4,

                icon: "⚙️",

                title: "Sistem Mühendisi",

                description:
                    "En doğru çözümü seç.",

                question:
                    "Bir algoritmayı geliştirmenin en iyi yollarından biri hangisidir?",

                options: [

                    "Gereksiz adımları azaltmak",

                    "Daha fazla hata eklemek",

                    "Rastgele komut kullanmak",

                    "Her şeyi tekrar etmek"

                ],

                answer: 0

            }

        ]

    },


    /* =================================================
       BÖLÜM 5
    ================================================= */

    {

        id: 5,

        name: "UZAY İSTASYONU",

        icon: "🚀",

        description:
            "Son görev. Algoritma, koşullar, döngüler ve problem çözme becerilerini kullanarak uzay istasyonunu kurtar.",

        missions: [

            {

                id: 1,

                icon: "🪐",

                title: "Otonom Navigasyon",

                description:
                    "Robotun rotasını belirle.",

                question:
                    "Otonom bir robotun güvenli ilerlemesi için en önemli şeylerden biri nedir?",

                options: [

                    "Çevresini algılaması",

                    "Rastgele hareket etmesi",

                    "Sensörleri kapatması",

                    "Komut almaması"

                ],

                answer: 0

            },


            {

                id: 2,

                icon: "🔋",

                title: "Enerji Yönetimi",

                description:
                    "Robotun enerjisini koru.",

                question:
                    "Robotun pili kritik seviyedeyse en mantıklı davranış hangisidir?",

                options: [

                    "Şarj istasyonuna yönelmek",

                    "Hızını artırmak",

                    "Sensörleri kapatmak",

                    "Daha uzun rota seçmek"

                ],

                answer: 0

            },


            {

                id: 3,

                icon: "🚨",

                title: "İstasyon Hatası",

                description:
                    "Sistemdeki problemi çöz.",

                question:
                    "Robot aynı noktada sürekli dönüyor. Algoritmada hangi problem olabilir?",

                options: [

                    "Yanlış veya eksik yönlendirme",

                    "Robotun rengi",

                    "Ekran çözünürlüğü",

                    "Robotun adı"

                ],

                answer: 0

            },


            {

                id: 4,

                icon: "🏆",

                title: "SON GÖREV",

                description:
                    "Kod ajanının final testi.",

                question:
                    "İyi bir robotik kodlama sisteminde algoritma, sensörler ve karar mekanizmalarının ortak amacı nedir?",

                options: [

                    "Robotun doğru ve kontrollü davranmasını sağlamak",

                    "Robotu rastgele hareket ettirmek",

                    "Daha fazla hata oluşturmak",

                    "Programı gereksiz yere uzatmak"

                ],

                answer: 0

            }

        ]

    }

];



/* =====================================================
   OYUN DURUMU
===================================================== */

let gameState = {

    playerName: "",

    xp: 0,

    completedMissions: {},

    completedRegions: []

};


let currentRegion = null;

let currentMission = null;



/* =====================================================
   SAYFA AÇILIŞI
===================================================== */

window.onload = function () {

    loadGame();


    if (gameState.playerName) {

        document
            .getElementById("nameScreen")
            .classList.add("hidden");


        document
            .getElementById("mapScreen")
            .classList.remove("hidden");


        document
            .getElementById("playerName")
            .textContent =
            gameState.playerName;


        renderMap();

    }

    else {

        document
            .getElementById("mapScreen")
            .classList.add("hidden");


        document
            .getElementById("chapterScreen")
            .classList.add("hidden");

    }


    updateTopBar();

};



/* =====================================================
   OYUNU BAŞLAT
===================================================== */

function startGame() {

    const input =
        document.getElementById("nameInput");


    const name =
        input.value.trim();


    if (!name) {

        input.style.borderColor =
            "#ff5263";


        input.placeholder =
            "Önce ajan adını yaz!";


        return;

    }


    gameState.playerName =
        name;


    saveGame();


    document
        .getElementById("nameScreen")
        .classList.add("hidden");


    document
        .getElementById("mapScreen")
        .classList.remove("hidden");


    document
        .getElementById("playerName")
        .textContent =
        name;


    renderMap();

    updateTopBar();

}



/* =====================================================
   HARİTAYI OLUŞTUR
===================================================== */

function renderMap() {

    const map =
        document.getElementById("gameMap");


    document
        .querySelectorAll(".region-node")
        .forEach(
            node => node.remove()
        );


    regions.forEach(
        region => {

            const node =
                document.createElement("div");


            node.classList.add(
                "region-node",
                `region-${region.id}`
            );


            const unlocked =
                isRegionUnlocked(
                    region.id
                );


            const completed =
                gameState
                    .completedRegions
                    .includes(region.id);


            if (unlocked) {

                node.classList.add(
                    "active"
                );

            }

            else {

                node.classList.add(
                    "locked"
                );

            }


            if (completed) {

                node.classList.add(
                    "completed"
                );

            }


            let status = "";


            if (completed) {

                status =
                    "✓ TAMAMLANDI";

            }

            else if (unlocked) {

                status =
                    "▶ GÖREVLERE GİT";

            }

            else {

                status =
                    "🔒 KİLİTLİ";

            }


            node.innerHTML = `

                <div class="region-circle">

                    ${
                        unlocked || completed
                        ? region.icon
                        : "🔒"
                    }

                </div>


                <div class="region-name">

                    ${region.name}

                </div>


                <div class="region-status">

                    ${status}

                </div>

            `;


            if (unlocked) {

                node.onclick =
                    function () {

                        openRegion(
                            region.id
                        );

                    };

            }

            else {

                node.onclick =
                    function () {

                        alert(
                            "🔒 Bu bölge kilitli!\n\n" +
                            "Önceki bölümdeki tüm görevleri tamamlamalısın."
                        );

                    };

            }


            map.appendChild(node);

        }
    );


    updateGlobalProgress();

}



/* =====================================================
   BÖLÜM KİLİDİ KONTROLÜ
===================================================== */

function isRegionUnlocked(regionId) {

    if (regionId === 1) {

        return true;

    }


    return gameState
        .completedRegions
        .includes(
            regionId - 1
        );

}



/* =====================================================
   BÖLÜMÜ AÇ
===================================================== */

function openRegion(regionId) {

    const region =
        regions.find(
            r => r.id === regionId
        );


    if (!region) {

        return;

    }


    if (!isRegionUnlocked(regionId)) {

        alert(
            "🔒 Bu bölüm henüz kilitli!"
        );

        return;

    }


    currentRegion =
        region;


    document
        .getElementById("mapScreen")
        .classList.add("hidden");


    document
        .getElementById("chapterScreen")
        .classList.remove("hidden");


    document
        .getElementById("chapterIcon")
        .textContent =
        region.icon;


    document
        .getElementById("chapterNumber")
        .textContent =
        `BÖLÜM ${String(region.id).padStart(2, "0")}`;


    document
        .getElementById("chapterTitle")
        .textContent =
        region.name;


    document
        .getElementById("chapterDescription")
        .textContent =
        region.description;


    renderMissions(region);

}



/* =====================================================
   GÖREVLERİ OLUŞTUR
===================================================== */

function renderMissions(region) {

    const container =
        document.getElementById(
            "missionsContainer"
        );


    container.innerHTML = "";


    const completedCount =
        region.missions.filter(
            mission =>
                isMissionCompleted(
                    region.id,
                    mission.id
                )
        ).length;


    region.missions.forEach(
        (mission, index) => {

            const completed =
                isMissionCompleted(
                    region.id,
                    mission.id
                );


            const previousCompleted =
                index === 0 ||
                isMissionCompleted(
                    region.id,
                    region.missions[index - 1].id
                );


            const available =
                !completed &&
                previousCompleted;


            const card =
                document.createElement("div");


            card.classList.add(
                "mission-card"
            );


            if (completed) {

                card.classList.add(
                    "completed"
                );

            }

            else if (available) {

                card.classList.add(
                    "available"
                );

            }

            else {

                card.classList.add(
                    "locked"
                );

            }


            let stateText = "";


            if (completed) {

                stateText = "✓";

            }

            else if (available) {

                stateText = "▶";

            }

            else {

                stateText = "🔒";

            }


            card.innerHTML = `

                <div class="mission-card-top">

                    <span class="mission-number">

                        GÖREV
                        ${String(mission.id).padStart(2, "0")}

                    </span>


                    <span class="mission-state">

                        ${stateText}

                    </span>

                </div>


                <h3>

                    ${mission.icon}

                    ${mission.title}

                </h3>


                <p>

                    ${mission.description}

                </p>


                <div class="mission-xp">

                    +25 XP

                </div>

            `;


            if (available) {

                card.onclick =
                    function () {

                        startMission(
                            region.id,
                            mission.id
                        );

                    };

            }


            container.appendChild(card);

        }
    );


    const percentage =
        region.missions.length === 0
        ? 0
        : (
            completedCount /
            region.missions.length
        ) * 100;


    document
        .getElementById("chapterProgressText")
        .textContent =
        `${completedCount} / ${region.missions.length}`;


    document
        .getElementById("chapterProgressFill")
        .style.width =
        percentage + "%";

}



/* =====================================================
   GÖREV BAŞLAT
===================================================== */

function startMission(
    regionId,
    missionId
) {

    const region =
        regions.find(
            r => r.id === regionId
        );


    if (!region) {

        return;

    }


    const mission =
        region.missions.find(
            m => m.id === missionId
        );


    if (!mission) {

        return;

    }


    currentRegion =
        region;


    currentMission =
        mission;


    document
        .getElementById("missionNumber")
        .textContent =
        `GÖREV ${String(mission.id).padStart(2, "0")}`;


    document
        .getElementById("missionIcon")
        .textContent =
        mission.icon;


    document
        .getElementById("missionTitle")
        .textContent =
        mission.title;


    document
        .getElementById("missionQuestion")
        .textContent =
        mission.question;


    const options =
        document.getElementById(
            "missionOptions"
        );


    options.innerHTML = "";


    document
        .getElementById("missionFeedback")
        .className =
        "mission-feedback hidden";


    document
        .getElementById("continueBtn")
        .classList.add("hidden");


    mission.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.classList.add(
                "option-btn"
            );


            button.textContent =
                option;


            button.onclick =
                function () {

                    checkAnswer(index);

                };


            options.appendChild(
                button
            );

        }
    );


    document
        .getElementById("missionModal")
        .classList.remove("hidden");

}



/* =====================================================
   CEVABI KONTROL ET
===================================================== */

function checkAnswer(selectedIndex) {

    const mission =
        currentMission;


    if (!mission) {

        return;

    }


    const buttons =
        document.querySelectorAll(
            ".option-btn"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    const feedback =
        document.getElementById(
            "missionFeedback"
        );


    if (
        selectedIndex ===
        mission.answer
    ) {

        buttons[selectedIndex]
            .classList.add("correct");


        feedback.className =
            "mission-feedback correct";


        feedback.innerHTML =
            "✓ DOĞRU! Harika iş ajan!";


        completeCurrentMission();

    }

    else {

        buttons[selectedIndex]
            .classList.add("wrong");


        buttons[mission.answer]
            .classList.add("correct");


        feedback.className =
            "mission-feedback wrong";


        feedback.innerHTML =
            "✕ TAM DOĞRU DEĞİL. Doğru cevabı incele ve devam et.";

    }


    feedback.classList.remove(
        "hidden"
    );


    document
        .getElementById("continueBtn")
        .classList.remove("hidden");

}



/* =====================================================
   GÖREVİ TAMAMLA
===================================================== */

function completeCurrentMission() {

    if (
        !currentRegion ||
        !currentMission
    ) {

        return;

    }


    const key =
        `${currentRegion.id}-${currentMission.id}`;


    if (
        gameState.completedMissions[key]
    ) {

        return;

    }


    gameState.completedMissions[key] =
        true;


    gameState.xp += 25;


    saveGame();

    updateTopBar();

}



/* =====================================================
   DEVAM ET
===================================================== */

function continueMission() {

    closeMission();


    if (!currentRegion) {

        return;

    }


    const allCompleted =
        currentRegion.missions.every(
            mission =>
                isMissionCompleted(
                    currentRegion.id,
                    mission.id
                )
        );


    if (allCompleted) {

        completeRegion();

        return;

    }


    renderMissions(
        currentRegion
    );

}



/* =====================================================
   GÖREVİ KAPAT
===================================================== */

function closeMission() {

    document
        .getElementById("missionModal")
        .classList.add("hidden");

}



/* =====================================================
   BÖLÜM TAMAMLAMA
===================================================== */

function completeRegion() {

    if (!currentRegion) {

        return;

    }


    if (
        gameState.completedRegions
            .includes(currentRegion.id)
    ) {

        renderMissions(
            currentRegion
        );

        return;

    }


    gameState.completedRegions.push(
        currentRegion.id
    );


    gameState.xp += 100;


    saveGame();


    document
        .getElementById("completeTitle")
        .textContent =
        `${currentRegion.name} TAMAMLANDI`;


    if (
        currentRegion.id <
        regions.length
    ) {

        const nextRegion =
            regions.find(
                r =>
                    r.id ===
                    currentRegion.id + 1
            );


        document
            .getElementById("completeMessage")
            .innerHTML =
            `🎉 Tebrikler ajan!<br><br>
            <strong>
                ${nextRegion.icon}
                ${nextRegion.name}
            </strong>
            artık erişilebilir.`;

    }

    else {

        document
            .getElementById("completeMessage")
            .innerHTML =
            "🏆 TÜM OPERASYONLARI TAMAMLADIN!<br><br>" +
            "Sen artık gerçek bir KOD AJANISIN!";

    }


    document
        .getElementById("completeModal")
        .classList.remove("hidden");


    updateTopBar();

}



/* =====================================================
   TAMAMLAMA EKRANINDAN HARİTAYA
===================================================== */

function continueFromComplete() {

    document
        .getElementById("completeModal")
        .classList.add("hidden");


    document
        .getElementById("chapterScreen")
        .classList.add("hidden");


    document
        .getElementById("mapScreen")
        .classList.remove("hidden");


    renderMap();

    updateTopBar();

}



/* =====================================================
   HARİTAYA DÖN
===================================================== */

function backToMap() {

    document
        .getElementById("chapterScreen")
        .classList.add("hidden");


    document
        .getElementById("mapScreen")
        .classList.remove("hidden");


    renderMap();

}



/* =====================================================
   GÖREV TAMAMLANDI MI?
===================================================== */

function isMissionCompleted(
    regionId,
    missionId
) {

    return !!gameState
        .completedMissions[
            `${regionId}-${missionId}`
        ];

}



/* =====================================================
   ÜST BARI GÜNCELLE
===================================================== */

function updateTopBar() {

    document
        .getElementById("xpText")
        .textContent =
        gameState.xp;


    document
        .getElementById("playerName")
        .textContent =
        gameState.playerName || "---";


    let currentChapter = 1;


    for (
        let i = 0;
        i < regions.length;
        i++
    ) {

        if (
            gameState.completedRegions
                .includes(
                    regions[i].id
                )
        ) {

            currentChapter =
                Math.min(
                    i + 2,
                    regions.length
                );

        }

    }


    document
        .getElementById("chapterText")
        .textContent =
        `${currentChapter} / ${regions.length}`;

}



/* =====================================================
   GENEL İLERLEME
===================================================== */

function updateGlobalProgress() {

    let total = 0;

    let completed = 0;


    regions.forEach(
        region => {

            total +=
                region.missions.length;


            region.missions.forEach(
                mission => {

                    if (
                        isMissionCompleted(
                            region.id,
                            mission.id
                        )
                    ) {

                        completed++;

                    }

                }
            );

        }
    );


    const percentage =
        total === 0
        ? 0
        : (
            completed /
            total
        ) * 100;


    document
        .getElementById("progressText")
        .textContent =
        `${completed} / ${total} GÖREV`;


    document
        .getElementById("globalProgress")
        .style.width =
        percentage + "%";

}



/* =====================================================
   LOCAL STORAGE
===================================================== */

function saveGame() {

    localStorage.setItem(
        "kodAjaniGame",
        JSON.stringify(gameState)
    );

}



/* =====================================================
   OYUNU YÜKLE
===================================================== */

function loadGame() {

    const saved =
        localStorage.getItem(
            "kodAjaniGame"
        );


    if (!saved) {

        return;

    }


    try {

        gameState =
            JSON.parse(saved);


        /*
            Eski veya bozuk kayıtlarda
            eksik alanları oluştur.
        */

        if (
            !gameState.completedMissions
        ) {

            gameState.completedMissions =
                {};

        }


        if (
            !gameState.completedRegions
        ) {

            gameState.completedRegions =
                [];

        }


        if (
            typeof gameState.xp !==
            "number"
        ) {

            gameState.xp = 0;

        }


    }

    catch (error) {

        console.log(
            "Kayıt yüklenemedi."
        );


        gameState = {

            playerName: "",

            xp: 0,

            completedMissions: {},

            completedRegions: []

        };

    }

}



/* =====================================================
   OYUNU SIFIRLA
===================================================== */

function resetGame() {

    const confirmReset =
        confirm(
            "Tüm ilerleme silinecek.\n\n" +
            "Oyunu sıfırlamak istediğine emin misin?"
        );


    if (!confirmReset) {

        return;

    }


    localStorage.removeItem(
        "kodAjaniGame"
    );


    location.reload();

}
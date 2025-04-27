console.log("welcome  to here");
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let leftSidebtn = document.getElementById('leftSidebtn')
let rightSidebtn = document.getElementById('rightSidebtn')
let gif = document.getElementById('gif');
let artistContainer = document.getElementById('artistContainer')
let songItemsContainer = document.getElementById('songItemsContainer');
let artistMainContainer = document.querySelectorAll('artist-main-container')
let Titleheading = document.getElementsByClassName('heading')
let menuIcon = document.getElementById('menuIcon')
let closeMenu = document.getElementById('closebtn')

menuIcon.addEventListener('click', (e) => {
    console.log("menuIcon clicked");
    document.getElementById("mySidepanel").style.width = "180px";
});

closeMenu.addEventListener('click', () => {
    console.log("closebtn click")
    document.getElementById("mySidepanel").style.width = "0";
})

const navbar = document.getElementById('mainNavbar'); 

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href'); 
        navbar.classList.remove('navbar');
        navbar.classList.add('newNavbar');
        const targetSection = document.querySelector(targetId);
        document.getElementById("mySidepanel").style.width = "0";
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.querySelectorAll('.sidepanel a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mySidepanel').classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    const topBtn = document.getElementById('scrollToTopBtn');

    if (window.scrollY > 0) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }

});

document.getElementById('nav-img').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    navbar.classList.remove('newNavbar');
    navbar.classList.add('navbar');
})

document.getElementById('scrollToTopBtn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    document.querySelector('.music-container').style.display = 'block'
    // Change to newNavbar style
    navbar.classList.remove('newNavbar');
    navbar.classList.add('navbar');      // (if needed, but likely already there)
});


const userEmail = "swati@123";
const userPassword = "12345";

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, "email and password")
    let loginContainer = document.querySelector('.login-container')
    let musicContainer = document.querySelector('.music-container')
    let pages = document.getElementById('pages')
    if (email === userEmail && password === userPassword) {
        alert("Login Successful 🎉");
        loginContainer.style.display = 'none'
        musicContainer.style.display = 'block'
        pages.style.display = 'block'

    } else {
        alert("Invalid Email or Password ❌");
    }
});


let songs = [
    { songName: "Salam-e-Ishq", filePath: "songs/S.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "papa meri jaan", filePath: "songs/song6.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "Aaj-Ki-Raat", filePath: "songs/AajKiRaat.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "Rooh", filePath: "songs/Rooh.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "Yaara", filePath: "songs/Yaara.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "Uyi Amma", filePath: "songs/uyiAmma.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "LadkiDeewani", filePath: "songs/LadkiDeewani.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "Apne", filePath: "songs/sonuNigam/Apne.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "AallzzWell", filePath: "songs/sonuNigam/AallzzWell.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "AyeZindagi", filePath: "songs/sonuNigam/AyeZindagi.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "ChalPyarKaregi", filePath: "songs/sonuNigam/ChalPyarKaregi.mp3", coverPath: "covers/musicCoverImg.png" },
    { songName: "HelloBrother", filePath: "songs/sonuNigam/HelloBrother.mp3", coverPath: "covers/musicCoverImg.png" },
    
]
let defaultSongs = [...songs];

let artistList = [
    {
        artistName: "Mahendra Kapoor", srcpath: "covers/mahendraKapoor1.png", desc: "Artist",
        songs: [

            { songName: "BharatKa", filePath: "songs/MahendraKapoor/BharatKaRahnewalaHoon.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "JahanDaalDaal", filePath: "songs/MahendraKapoor/JahanDaalDaal.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "KrantiKranti ", filePath: "songs/MahendraKapoor/KrantiKranti.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AbKeBaras ", filePath: "songs/MahendraKapoor/AbKeBaras.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "HoliAyeeRe ", filePath: "songs/MahendraKapoor/HoliAyeeRe.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "RotiKapada ", filePath: "songs/MahendraKapoor/RotiKapada.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "YehHawaYehFiza ", filePath: "songs/MahendraKapoor/YehHawaYehFiza.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "TerePrabhu ", filePath: "songs/MahendraKapoor/TerePrabhu.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AeAasman ", filePath: "songs/MahendraKapoor/AeAasman.mp3", coverPath: "covers/musicCoverImg.png" },

        ]
    },
    {
        artistName: "Munna Dey", srcpath: "covers/munnaDey.png", desc: "Artist",
        songs: [

            { songName: "KyaLekarAaya", filePath: "songs/mannaDey/KyaLekarAaya.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "DhartiAmbar", filePath: "songs/mannaDey/DhartiAmbar.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "DilDharkePyar", filePath: "songs/mannaDey/DilDharkePyar.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "DinAlbele", filePath: "songs/mannaDey/DinAlbele.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "EkThaRaja", filePath: "songs/mannaDey/EkThaRaja.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "JaMeriBahna", filePath: "songs/mannaDey/JaMeriBahna.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "MehfilMainAye", filePath: "songs/mannaDey/MehfilMainAye.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "JiskaKoiNahi", filePath: "songs/mannaDey/JiskaKoiNahi.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "JinkePaas", filePath: "songs/mannaDey/JinkePaas.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Deewaaron", filePath: "songs/mannaDey/Deewaaron.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "CyclePeHasinon", filePath: "songs/mannaDey/CyclePeHasinon.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Chundariya", filePath: "songs/mannaDey/Chundariya.mp3", coverPath: "covers/musicCoverImg.png" },


        ]
    },
    {
        artistName: "Kishore Kumar", srcpath: "covers/kishoreimg.png", desc: "Artist",
        songs: [
            { songName: "BachpanHarGham", filePath: "songs/kishoreKumar/BachpanHarGham.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AyaMein", filePath: "songs/kishoreKumar/AyaMein.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AchheBachche", filePath: "songs/kishoreKumar/AchheBachche.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Aankhon", filePath: "songs/kishoreKumar/Aankhon.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Abc", filePath: "songs/kishoreKumar/Abc.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AapSaKoi", filePath: "songs/kishoreKumar/AapSaKoi.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AapApneNashe", filePath: "songs/kishoreKumar/AapApneNashe.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AnkhiyonHiAnkhiyon", filePath: "songs/kishoreKumar/AnkhiyonHiAnkhiyon.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AesiHaseen", filePath: "songs/kishoreKumar/AesiHaseen.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AajaRaatBeeti", filePath: "songs/kishoreKumar/AajaRaatBeeti.mp3", coverPath: "covers/musicCoverImg.png" },

        ]
    },
    {
        artistName: "Sonu Nigam", srcpath: "covers/sonunigam.png", desc: "Artist",
        songs: [

            { songName: "EkLadkiChahiye", filePath: "songs/sonuNigam/EkLadkiChahiye.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Apne", filePath: "songs/sonuNigam/Apne.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "BoleChudiyan", filePath: "songs/sonuNigam/BoleChudiyan.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AalIzzWell", filePath: "songs/sonuNigam/AalIzzWell.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "ChaloIshq", filePath: "songs/sonuNigam/ChaloIshqladaaye.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "BhagwanHai", filePath: "songs/sonuNigam/BhagwanHaiKahanReTu.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AyeZindagi", filePath: "songs/sonuNigam/AyeZindagi.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "ChalChaliye", filePath: "songs/sonuNigam/ChalChaliye.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "HumkoTohRehna", filePath: "songs/sonuNigam/HumkoTohRehna.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "GoreTanSe", filePath: "songs/sonuNigam/GoreTanSe.mp3", coverPath: "covers/musicCoverImg.png" },




        ]
    },
    {
        artistName: "Lata Mangeshkar", srcpath: "covers/lataMangeshkar1.png", desc: "Artist",
        songs: [

            { songName: "ABCDChhodo", filePath: "songs/lataMangeshkar/ABCDChhodo.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaiReKhilone", filePath: "songs/lataMangeshkar/AaiReKhilone.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AbDarne", filePath: "songs/lataMangeshkar/AbDarne.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AbAgarHumse", filePath: "songs/lataMangeshkar/AbAgarHumse.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaMeriJaan", filePath: "songs/lataMangeshkar/AaMeriJaan.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AajImtehan", filePath: "songs/lataMangeshkar/AajImtehan.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AajaRasiya", filePath: "songs/lataMangeshkar/AajaRasiya.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AajKaDin", filePath: "songs/lataMangeshkar/AajKaDin.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AainaWohi", filePath: "songs/lataMangeshkar/AainaWohi.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AagSeAagBujha", filePath: "songs/lataMangeshkar/AagSeAagBujha.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaGayeHum", filePath: "songs/lataMangeshkar/AaGayeHum.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaoonKiJaoon", filePath: "songs/lataMangeshkar/AaoonKiJaoon.mp3", coverPath: "covers/musicCoverImg.png" },



        ]
    },
    // {
    //     artistName: "Asha Bhosle", srcpath: "covers/ashaBhosale2.png", desc: "Artist",
    //     songs: [
    //         { songName: "Aaj Phir", filePath: "songs/arijitsingh/AajPhir.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "AasanNahinYahan", filePath: "songs/arijitsingh/AasanNahinYahan.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "Ae Zindagi", filePath: "songs/arijitsingh/AeZindagiGaleLagaLe.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "AgarTumSaathHo", filePath: "songs/arijitsingh/AgarTumSaathHo.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "BaatonKoTeri", filePath: "songs/arijitsingh/BaatonKoTeri.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "BandeyaReyBandeya", filePath: "songs/arijitsingh/BandeyaReyBandeya.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "DilliwaaliGirlfriend", filePath: "songs/arijitsingh/DilliwaaliGirlfriend.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "HarKisiKo", filePath: "songs/arijitsingh/HarKisiKo.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "HeerRaanjhana", filePath: "songs/arijitsingh/HeerRaanjhana.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "LekePrabhuKaNaam", filePath: "songs/arijitsingh/LekePrabhuKaNaam.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "LuttPuttGaya", filePath: "songs/arijitsingh/LuttPuttGaya.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "MahiAaja", filePath: "songs/arijitsingh/MahiAaja.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "MainRangSharbatonKa", filePath: "songs/arijitsingh/MainRangSharbatonKa.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "MohabbatBarsaDe", filePath: "songs/arijitsingh/MohabbatBarsaDe.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "NasheSiChadhGayi", filePath: "songs/arijitsingh/NasheSiChadhGayi.mp3", coverPath: "covers/musicCoverImg.png" },
    //         { songName: "OBedardeya", filePath: "songs/arijitsingh/OBedardeya.mp3", coverPath: "covers/musicCoverImg.png" },
    //     ]
    // },
    {
        artistName: "Mohammed Rafi", srcpath: "covers/mohammadRafi6.png", desc: "Artist",
        songs: [
            { songName: "OBedardeya", filePath: "songs/arijitsingh/OBedardeya.mp3", coverPath: "covers/musicCoverImg.png" },

            { songName: "Aa Dance Karen", filePath: "songs/mohammedRafi/AaDanceKarenThoraRomance.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AadhiSachchiAadhi", filePath: "songs/mohammedRafi/AadhiSachchiAadhi.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AadmiSadakKa", filePath: "songs/mohammedRafi/AadmiSadakKa.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaGaleLagja", filePath: "songs/mohammedRafi/AaGaleLagja.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaiYarTeriYari", filePath: "songs/mohammedRafi/AaiYarTeriYari.mp3", coverPath: "covers/musicCoverImg.png" },


        ]
    },
    {
        artistName: "Arijit singh", srcpath: "covers/arijitimg1.png", desc: "Artist",
        songs: [
            { songName: "Aaj Phir", filePath: "songs/arijitsingh/AajPhir.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AasanNahinYahan", filePath: "songs/arijitsingh/AasanNahinYahan.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AeDilHaiMuskil", filePath: "songs/arijitsingh/AeDilHaiMuskil.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AgarTumSaathHo", filePath: "songs/arijitsingh/AgarTumSaathHo.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "MohabbatBarsaDe", filePath: "songs/arijitsingh/MohabbatBarsaDe.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "OBedardeya", filePath: "songs/arijitsingh/OBedardeya.mp3", coverPath: "covers/musicCoverImg.png" },
        ]
    },
    {
        artistName: "Kumar Sanu", srcpath: "covers/kumarShanu2.png", desc: "Artist",
        songs: [

            { songName: "AajMainUpar", filePath: "songs/kumarSanu/AajMainUpar.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "MohabbatBarsaDe", filePath: "songs/kumarSanu/AisToKoiAurDujMeriBiwi.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AayegiHarPal", filePath: "songs/kumarSanu/AayegiHarPal.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaJaana", filePath: "songs/kumarSanu/AaJaana.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AajHumeinMaloom", filePath: "songs/kumarSanu/AajHumeinMaloom.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AajMileHoKal", filePath: "songs/kumarSanu/AajMileHoKal.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AajMaine", filePath: "songs/kumarSanu/AajMaine.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaKhelKhelen", filePath: "songs/kumarSanu/AaKhelKhelen.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AajkaDin", filePath: "songs/kumarSanu/AajkaDin.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "DilPeChale", filePath: "songs/kumarSanu/DilPeChale.mp3", coverPath: "covers/musicCoverImg.png" },

        ]
    },

    {
        artistName: "Alka Yagnik", srcpath: "covers/alkayagnik.png", desc: "Artist",
        songs: [
            { songName: "LashkaraLashkara", filePath: "songs/alkaYagnik/LashkaraLashkara.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "IdharchalaMein", filePath: "songs/alkaYagnik/IdharchalaMeinUdharChala.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "HumYaarHaiTumhare", filePath: "songs/alkaYagnik/HumYaarHaiTumhare.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "KitnaPyaarahai", filePath: "songs/alkaYagnik/KitnaPyaarahai.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "KitnaPagalDil", filePath: "songs/alkaYagnik/KitnaPagalDil.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "JogiyaJogiya", filePath: "songs/alkaYagnik/JogiyaJogiya.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "JaaneJaana", filePath: "songs/alkaYagnik/JaaneJaana.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "IsDuniyaMenPrem", filePath: "songs/alkaYagnik/IsDuniyaMenPrem.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "HumkoHua", filePath: "songs/alkaYagnik/HumkoHua.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "HumMile", filePath: "songs/alkaYagnik/HumMile.mp3", coverPath: "covers/musicCoverImg.png" },




        ]
    },

    {
        artistName: "Shreya Ghoshal", srcpath: "covers/shreyaGhoshal1.png", desc: "Artist",
        songs: [
            { songName: "AankhonMein", filePath: "songs/shreyaghoshal/AankhonMeinNeendein.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaPaasAaAnkahee", filePath: "songs/shreyaghoshal/AaPaasAaAnkahee.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AaReAaReBesharam", filePath: "songs/shreyaghoshal/AaReAaReBesharam.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "AashiqSurrenderHua", filePath: "songs/shreyaghoshal/AashiqSurrenderHua.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "ChandaniyaLoriLori", filePath: "songs/shreyaghoshal/ChandaniyaLoriLori.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "DagabaazReDabangg", filePath: "songs/shreyaghoshal/DagabaazReDabangg.mp3", coverPath: "covers/musicCoverImg.png" },

        ]
    },
    {
        artistName: "Pawan Singh", srcpath: "covers/pawansingh.png", desc: "Artist",
        songs: [

            { songName: "PiyarFarakWali", filePath: "songs/pawanSingh/PiyarFarakWali.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "RajaJiKeDilwa", filePath: "songs/pawanSingh/RajaJiKeDilwa.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "BulletPaJija", filePath: "songs/pawanSingh/BulletPaJija.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Pudina", filePath: "songs/pawanSingh/Pudina.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "DhaniHo", filePath: "songs/pawanSingh/DhaniHo.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "SwimmingPool", filePath: "songs/pawanSingh/AngnaMeSaiyaSwimmingPool.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Parichhawan", filePath: "songs/pawanSingh/Parichhawan.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "RangThope", filePath: "songs/pawanSingh/RangThope.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Zindagi", filePath: "songs/pawanSingh/Zindagi.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "YeAara", filePath: "songs/pawanSingh/YeAara.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "Rajaji", filePath: "songs/pawanSingh/Rajaji.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "MehraruMilalGaay", filePath: "songs/pawanSingh/MehraruMilalGaay.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "LehengaLehakJaayi", filePath: "songs/pawanSingh/LehengaLehakJaayi.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "BasKarPagli", filePath: "songs/pawanSingh/BasKarPagli.mp3", coverPath: "covers/musicCoverImg.png" },
            { songName: "BiharMeHoi", filePath: "songs/pawanSingh/BiharMeHoi.mp3", coverPath: "covers/musicCoverImg.png" },



        ]
    },

]



function renderSongs(songArray) {
    songItemsContainer.innerHTML = "";

    songArray.forEach((song, index) => {
        songItemsContainer.innerHTML += `
            <div class="songItemsContainer" data-index="${index}">
            <div class='coverImgContainer'>
                <img class='coverImg' src="${song.coverPath}" alt="cover">
             </div>
                <span >${song.songName}</span>
                <span class="songlistplay">
                    <span class="timestamp">05:00 
                        <i class="far fa-play-circle songItemPlay" data-index="${index}"></i>
                    </span>
                      <span class="threedots">
                       <i class="fa-solid fa-ellipsis-vertical menuIcon" data-index="${index}"></i>
                       </span>
                         <div class="menu-modal" data-index="${index}">
                          <p class="addtofav" data-index="${index}">Add to  MyFav Song</p>
                        </div>

                </span>
            </div>
        `;
    });
    console.log("Cover Path for song:", songArray[songIndex].coverPath);

    document.querySelectorAll('.coverImg')[songIndex].src = songArray[songIndex].coverPath;

    function handleSongPlay(container) {
        container.querySelectorAll('.songItemPlay').forEach((element) => {
            element.addEventListener('click', (e) => {
                document.querySelectorAll('.songItemPlay').forEach((el) => {
                    el.classList.remove('fa-pause-circle');
                    el.classList.add('fa-play-circle');
                });

                const songIdx = parseInt(e.target.getAttribute('data-index'));
                songIndex = songIdx;
                audioElement.src = songArray[songIndex].filePath;
                audioElement.currentTime = 0;
                audioElement.play();

                // Update UI
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
                document.querySelector('.songName').innerText = songArray[songIndex].songName;

            });

        });
    }

    // for play song 

    let song = document.querySelector('.main-container')
    handleSongPlay(song)

    // end



    const myFavSong = document.getElementById('myFavSong');

    if (myFavSong.children.length === 0) {
        const mess = document.createElement('h3');
        mess.textContent = "My Fav Song list is empty";
        mess.id = "emptyMessage";
        mess.classList.add('emptymess');
        myFavSong.appendChild(mess);
    }

    document.querySelectorAll('.songItemsContainer').forEach((ele) => {
        ele.addEventListener('click', () => {
            // Sabhi songItemsContainer se pehle songBox class hata do (optional: agar ek hi active chahiye ho)
            document.querySelectorAll('.songItemsContainer').forEach(el => el.classList.remove('songBox'));

            // Ab clicked element mein class add karo
            ele.classList.add('songBox');
        });
    });


    document.querySelectorAll('.threedots').forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation(); // Step 1
            const allModals = document.querySelectorAll('.menu-modal'); // Step 2
            allModals.forEach(modal => modal.style.display = 'none'); // Step 3
            const currentModal = document.querySelector(`.menu-modal[data-index="${index}"]`); // Step 4
            console.log(currentModal, "sooo")
            if (currentModal) {
                currentModal.style.display = 'block'; // Step 5
            }

            document.querySelectorAll('.songItemsContainer').forEach((ele) => {

                const index = ele.getAttribute('data-index');
                const addToFavBtn = ele.querySelector('.addtofav');
                addToFavBtn.addEventListener('click', () => {
                    const clone = ele.cloneNode(true); // Create a copy
                    clone.setAttribute('data-index', index); // Set index (optional)
                    clone.classList.add('fav-style');
                    const emptyMsg = document.getElementById('emptyMessage');
                    if (emptyMsg) emptyMsg.remove();
                    // Optional: Prevent duplicate entries
                    if (!myFavSong.querySelector(`[data-index="${index}"]`)) {
                        myFavSong.appendChild(clone);
                        handleSongPlay(myFavSong)
                    }

                });


            });



        });
    });


    // OPTIONAL: Click anywhere outside to close it
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.threedots')) {
            document.querySelectorAll('.menu-modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });

}

masterPlay.addEventListener('click', () => {
    console.log('Master play clicked');

    if (!audioElement.src) {
        audioElement.src = songs[songIndex].filePath;
    }

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        document.querySelector('.songName').innerText = songArray[songIndex].songName;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        document.querySelector('.songName').innerText = songArray[songIndex].songName;
    }
});



// //handle play pause click
// masterPlay.addEventListener('click', () => {
//     console.log('Master play clicked');

//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//         document.querySelector('.songName').innerText = songs[songIndex].songName;

//     } else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//         document.querySelector('.songName').innerText = songs[songIndex].songName;

//     }
// })



rightSidebtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    audioElement.play();
    document.querySelector('.songName').innerText = songs[songIndex].songName;

})

leftSidebtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    audioElement.play();
    document.querySelector('.songName').innerText = songs[songIndex].songName;

});


//listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    document.querySelector('.songName').innerText = songs[songIndex].songName;

})

audioElement.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length; // Loop back to the first song after the last
    console.log(songIndex)
    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    audioElement.play();
    document.querySelector('.songName').innerText = songs[songIndex].songName;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

myProgressBar.addEventListener('click', (e) => {
    const progressBarWidth = myProgressBar.clientWidth;
    const clickPosition = e.offsetX;
    const clickRatio = clickPosition / progressBarWidth;
    const newTime = clickRatio * audioElement.duration;
    audioElement.currentTime = newTime;
});

function renderArtists() {
    artistContainer.innerHTML = "";

    artistList.forEach((artist, index) => {

        artistContainer.innerHTML += `
            <div id="artistContainer">
                <div class="artist-main-container" data-index="${index}">
                    <div class='artistImg'>
                        <img src="${artist.srcpath}" alt="" class="artistImg">
                    </div>
                    <div>
                        <h3 class="artistName">${artist.artistName}</h3>
                        <p>${artist.desc}</p>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelectorAll('.artist-main-container').forEach((ele) => {
        ele.addEventListener('click', () => {
            // Sabhi songItemsContainer se pehle songBox class hata do (optional: agar ek hi active chahiye ho)
            document.querySelectorAll('.artist-main-container').forEach(el => el.classList.remove('clickArtistCard'));

            // Ab clicked element mein class add karo
            ele.classList.add('clickArtistCard')
        });
    });



    // ✅ Now attach click listeners here
    document.querySelectorAll('.artist-main-container').forEach((artistElement) => {
        artistElement.addEventListener('click', () => {
            const index = artistElement.getAttribute("data-index");

            // Select heading element (assumes only ONE exists)
            const titleElement = document.querySelector(".heading");

            // Get artist name
            const artistNameElement = artistElement.querySelector('.artistName');
            const artistName = artistNameElement?.textContent;

            // ✅ Update the heading with artist name
            if (titleElement && artistName) {
                titleElement.textContent = `Best Songs of ${artistName}`;
                console.log(titleElement.textContent, "Updated Title");
            }


            let selectedArtist = artistList[index];

            if (selectedArtist.songs && selectedArtist.songs.length > 0) {
                songs = selectedArtist.songs;
                renderSongs(songs);
            }
            else {
                songs = defaultSongs;
                renderSongs(songs);
            }

            if (window.innerWidth <= 768) {
                const gradientBorder = document.querySelector('.gradientboarder');
                gradientBorder?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


renderArtists();
renderSongs(songs);
console.log('Artist clicked:', selectedArtist.artistName);
console.log('Songs for artist:', selectedArtist.songs);









//fetch

const getData = () => {
  fetch(
    "https://raw.githubusercontent.com/clarusway/clarusway-FS-DE-03-TR/main/javascript/assigments/js-7/tv-shows.json?token=GHSAT0AAAAAABVTPKUXBHVMXGSZJYXFLGHEYZ2XDUQ"
  )
    .then((response) => {
      if (response.ok == false) {
        throw new Error("Bir hata olustu"); //Hata olusup olusmadigini kontrol ettik
      } else return response.json(); //Artik köseli parantezle yazdigimiz icin disariya return ile göndermemiz gereikiyor
    })
    .then((data) => ekranaBastir(data)) //Burda kalabalik olmasi diye fonksiyon cagirdim. O fonksiyon icinde ekrana bastirma islemini yapacagim.json cevirdigim datalari fonksiyona göndermem gerekir
    .catch((err) => console.log(err)); //Eger yukarda bi yerde bir hata olursa burda hatamizi gösterecek.
};

getData();

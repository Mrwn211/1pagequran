const axios = require("axios");

// API Call to get the translation of the page related to pageNumber and translationType

const loadPageTranslationAxios = async recipient => {
  let translationType;

  if (recipient.translationType === "en") {
    translationType = `en.hilali`;
  } else if (recipient.translationType === "fr") {
    translationType = `fr.hamidullah`;
  }

  try {
    const response = await axios.get(
      `http://api.alquran.cloud/v1/page/${recipient.advancement}/${translationType}`
    );
    const ayahsArr = response.data.data.ayahs;
    let ayah = [];
    for (const ayahIndex of ayahsArr) {
      ayah.push({ number: ayahIndex.numberInSurah, text: ayahIndex.text });
    }
    return ayah;
  } catch (error) {
    console.error(`loadPageTranslationAxios error : ${error.message}`);
  }
};

module.exports = loadPageTranslationAxios;

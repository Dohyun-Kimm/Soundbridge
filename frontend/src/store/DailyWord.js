import { defineStore } from "pinia";
import { getMyDailyWord, addMyDailyWord } from "@/api/dailyword";
import { ref } from "vue";

export const useMyDailyWord = defineStore("mydailyword", () => {
  const accessToken = "access-token 123";
  const mydailyword = ref();

  // GET
  async function getmydailyword() {
    await getMyDailyWord(accessToken, ({ data }) => {
      mydailyword.value = data;
      console.log("Get method responses", mydailyword.value);
    });
  }

  // POST
  async function addmydailyword(newWord) {
    await addMyDailyWord(newWord, accessToken, ({ data }) => {
      console.log(data, " get my sentence");
    });
  }

  // getters == computed()  랜더링 될때 실행되는 함수 -
  // api 불러오는 함수 선언하고, response 값 state에 저장
  //
  return {
    getmydailyword,
    addmydailyword,
    mydailyword,
  };
});

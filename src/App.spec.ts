import { shallowMount, VueWrapper } from "@vue/test-utils";
import App from "./App.vue";
import { HelloWorld } from "./components";

describe("App.vue", () => {

  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  })

  it("로고가 있는지 검사", () => {
    expect(wrapper.get("img").attributes("alt")).toMatch("Vue logo");
  })

  it("Hello World 컴포넌트의 존재 여부 검사", () => {
    const $helloWorld = wrapper.findComponent(HelloWorld);
    expect($helloWorld.vm.$options.name).toBe("HelloWorld");
  })

})
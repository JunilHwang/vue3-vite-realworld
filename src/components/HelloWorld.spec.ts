import { shallowMount, VueWrapper } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";
import { store } from "@/store";

describe("HelloWorld.vue", () => {
  const msg = "new message";
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      props: { msg },
      global: {
        plugins: [store],
      }
    });
  })

  it("props 검증", () => {
    expect(wrapper.text()).toMatch(msg);
  });

  it("count 값: 0", () => {
    expect(wrapper.text()).toMatch(`count is: 0`);
  });

  it("count 값 증가", async () => {
    const $button = wrapper.get("[type=button]");
    await $button.trigger('click');
    expect($button.text()).toMatch(`count is: 1`);
  });
});

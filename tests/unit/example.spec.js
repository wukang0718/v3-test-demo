import { shallowMount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  it("test emit", async () => {
    console.log(process.env.NODE_ENV);
    const com = {
      template: `<div data-test="test" @click="$emit('foo', 'bar')"></div>`,
      emits: ["foo"],
    };
    const wrapper = shallowMount(com);
    await wrapper.find("[data-test=test]").trigger("click");
    expect(wrapper.emitted("foo")).toHaveLength(1);
    expect(wrapper.emitted("foo")[0]).toEqual(["bar"]);
  });
});

import { describe, it } from "vitest";
import { mount } from "@vue/test-utils";
// import HelloWorldVue from "src/components/HelloWorld.vue";
import HelloWorld from "./HelloWorld.vue";
describe("HelloWorld.vue", () => {

  it('should render it page content correctly', () => {
    const message = "Happy People";
    const testMessage = "Happy People";
    const wrapper = mount(HelloWorld, { props: {msg: message}})
  })
})

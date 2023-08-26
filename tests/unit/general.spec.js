import { shallowMount } from "@vue/test-utils";
import GeneralInfo from "../../src/components/Forn/GeneralInfo.vue";

describe("GeneralInfo.vue", () => {
  it("submit  form", async () => {
    const mockRouter = {
      push: jest.fn(),
    };

    const wrapper = shallowMount(GeneralInfo, {
      mocks: {
        $router: mockRouter,
      },
    });

    wrapper.setData({
      formData: {
        firstName: "Shubham",
        lastName: "Tyagi",
        email: "99shubham99tyagi@gmail.com",
        address: "noida",
      },
    });

    const submitButton = wrapper.find('button[type="submit"]');
    await submitButton.trigger("click");
  });
});

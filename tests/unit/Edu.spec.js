import { shallowMount } from "@vue/test-utils";
import EducationInfo from "../../src/components/Forn/EducationInfo.vue";

describe("EducationInfo.vue", () => {
  it("submit  form and show data", async () => {
    const mockRouter = {
      push: jest.fn(),
    };

    const wrapper = shallowMount(EducationInfo, {
      mocks: {
        $router: mockRouter,
      },
    });

    wrapper.setData({
      formData: {
        SchoolName: "Delhi Public School",
        X_Board: "CBSE",
        XII_Board: "CBSE",
        X_Marks: 70,
        XII_Marks: 80,
        CollegeName: "Meerut Institute of Engineering and Technology",
        Specialization: "Computer Science",
        College_Marks: 75,
      },
    });

    const submitButton = wrapper.find('button[type="submit"]');
    await submitButton.trigger("click");
  });

  it("closes  modal button on click", async () => {
    const wrapper = shallowMount(EducationInfo);

    wrapper.setData({
      showModal: true,
    });
  });
});

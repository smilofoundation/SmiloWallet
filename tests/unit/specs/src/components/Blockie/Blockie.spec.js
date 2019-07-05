import Blockie from '@/components/Blockie';
import { mount } from '@vue/test-utils';

describe('Blockie.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(Blockie, {
      propsData: {
        address: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D'
      }
    });
    // We no longer add it as background but as innerhtml. The new identicon generates this.
    expect(wrapper.element.innerHTML).toEqual(
      '<div style=\"border-radius: 50px; overflow: hidden; padding: 0px; margin: 0px; width: 80px; height: 80px; display: inline-block; background: rgb(0, 71, 71);\"><svg x=\"0\" y=\"0\" width=\"80\" height=\"80\"><rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" transform=\"translate(12.994990245705702 -12.638570127772017) rotate(368.9 40 40)\" fill=\"#03353F\"></rect><rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" transform=\"translate(-45.45785096593285 -26.223488110411203) rotate(365.1 40 40)\" fill=\"#52A3EB\"></rect><rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" transform=\"translate(-73.41854979856303 -10.025337313980701) rotate(343.9 40 40)\" fill=\"#A6A6A6\"></rect></svg></div>'
    );
  });

  it('should render correct contents', () => {});
});

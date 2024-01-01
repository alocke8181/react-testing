import { render, fireEvent } from "@testing-library/react";
import Card from './Card';
import TEST_IMAGES from "./_testCommon";

const TEST_IMAGE = TEST_IMAGES[0];

test('smoke test',()=>{
    render(<Card caption={TEST_IMAGE.caption} src={TEST_IMAGE.src} currNum={1} totalNum={1} />);
});

test('snapshot', ()=>{
    const {asFragment} = render(<Card caption={TEST_IMAGE.caption} src={TEST_IMAGE.src} currNum={1} totalNum={1} />);
    expect(asFragment()).toMatchSnapshot();
})
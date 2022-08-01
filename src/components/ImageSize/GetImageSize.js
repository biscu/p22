export default function GetImageSize() {
    const onImgLoad = ({ target: img }) => {
        const { offsetHeight, offsetWidth } = img;
        console.log(offsetHeight, offsetWidth);
        return img;
      };
}

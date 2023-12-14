import noImage from '../assets/no-pictures1.png'
const getCroppedImageUrl = (url: string) => {
    if (!url) {
        return noImage
    }
    if (url) {
        const target = 'media/';
        const index = url.indexOf(target) + target.length;
        return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    }
    return url
}
export default getCroppedImageUrl
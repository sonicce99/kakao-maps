// 배포 모드일 때 도메인 설정.
const productionDomain = () => {
  if (typeof window !== "undefined") {
    return `https://${window.location.host}/`;
  }
};

export default productionDomain;

import '../scss/main.scss';

async function initFsLightbox() {
  const { FsLightbox } = await import('fslightbox');
  const fsLightboxInstances = {
    gallery: new FsLightbox(),
  };
  console.log(fsLightboxInstances);
}

initFsLightbox();

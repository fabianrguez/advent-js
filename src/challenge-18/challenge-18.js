export default function fixFiles(files) {
  let fixedFiles = [];

  files.forEach((file) => {
    if (fixedFiles.includes(file)) {
      const repeatedTimes = fixedFiles.filter((fixedFile) =>
        file.match(/\(\d\)$/)
          ? fixedFile === file
          : fixedFile.replace(/\(\d\)$/gm, '') === file.replace(/\(\d\)$/gm, '')
      ).length;
      fixedFiles.push(`${file}(${repeatedTimes})`);
    } else {
      fixedFiles.push(file);
    }
  });
  return fixedFiles;
}

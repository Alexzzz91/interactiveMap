import fs from 'fs';
import path from 'path';
import xpath from 'xpath';
import { DOMParser } from 'xmldom';

const replaceClassNames = async (needAddIdsForRegions = false) => {
  const directoryPath = path.join(process.cwd(), `/assets/img/levels`);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log(`не могу прочитать папку с svg схемами : ${err}`);
    }

    files.forEach(file => {
      const fileNameForClass = file.replace('.svg', '');
      const reFileNameForClass = new RegExp(fileNameForClass, 'g');
      const classesFromSvg = {};

      let svgText = fs.readFileSync(path.resolve(directoryPath, file), 'utf8');
      svgText = svgText.replace(reFileNameForClass, '');

      const doc = new DOMParser().parseFromString(svgText);

      if (needAddIdsForRegions) {
        const regionsWithoutId = xpath.select(
          '//*[@id="Regions"]/*[not(@id) or not(@data-mapid)]',
          doc
        );

        const xpathTrash = ' xmlns="http://www.w3.org/2000/svg"';

        regionsWithoutId.forEach((region, i) => {
          let stringTarget: string = region.toString();

          stringTarget = stringTarget.replace(xpathTrash, '');

          if (stringTarget) {
            // @ts-ignore
            const replaceTarget = stringTarget.match(/<\w+(\s)/)[0];

            const id = ` id="place${i}" data-mapid="place${i}" `;
            const stringTargetWitnId = stringTarget.replace(replaceTarget, replaceTarget + id);
  
            svgText = svgText.replace(stringTarget, stringTargetWitnId);
          }
        });
      }

      const nodes = xpath.select('//*/@class', doc);
      nodes.forEach(element => {
        // @ts-ignore
        const className = element.value;
        // @ts-ignore
        if (!classesFromSvg[className]) {
          // @ts-ignore
          classesFromSvg[className] = true;
        }
      });

      Object.keys(classesFromSvg).forEach(className => {
        const reClassName = new RegExp(className, 'g');

        if (!className.match(fileNameForClass)) {
          svgText = svgText.replace(reClassName, fileNameForClass + className);
        }
      });

      fs.writeFileSync(`${directoryPath}/${file}`, svgText);
    });
  });
};

export { replaceClassNames };

const copyToClipboard = (text: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (navigator?.clipboard) {
            navigator.clipboard.writeText(text)
            .then(() => resolve(),
             (err) => {
                reject(err);
            });
        } else {
            const textArea = document.createElement("textarea");
    
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            textArea.style.width = '2em';
            textArea.style.height = '2em';
            textArea.style.padding = '0';
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';
            textArea.style.background = 'transparent';
    
            textArea.value = text;
          
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
          
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    resolve();
                } else {
                    reject();
                }

            } catch (err) {
                reject();
            }
          
            document.body.removeChild(textArea);
        }
    });
}

export {
    copyToClipboard
}
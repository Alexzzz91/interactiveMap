export function debounce(f: Function, ms = 1000) {

  let isCooldown = false;

  return function() {
    if (isCooldown) {
        return;
    }

    // @ts-ignore
    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };
};

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};

  for (const domain of domains) {
    const labels = domain.split('.').reverse();
    for (let length = 1; length <= labels.length; length += 1) {
      const suffix = `.${labels.slice(0, length).join('.')}`;
      stats[suffix] = (stats[suffix] || 0) + 1;
    }
  }

  return stats;
}

module.exports = {
  getDNSStats
};

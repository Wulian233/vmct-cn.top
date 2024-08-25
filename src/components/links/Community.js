const serverMap = {
  discord: {
    id: 'discord',
    name: '',
    target: '_blank',
    link: 'https://discord.com/invite/SvJM5d9S98',
    secondary: 'SvJM5d9S98',
    icon: '/imgs/svg/discord.svg',
  },
  qq: {
    id: 'qq',
    name: '',
    target: '_blank',
    secondary: 'f006fek0f',
    link: 'https://qm.qq.com/q/zfY3xUJ2YS',
    icon: '/imgs/svg/qq.svg',
  },
}

export function serverLink(key, text) {
  const link = serverMap[key]

  link.name = text

  return link
}

export function serverJump(params, server) {
  if (
    Number(params.q) <=
    document.querySelectorAll(
      '#VPContent > div > div > div.content > div > main > div > div > details:nth-child(6) > ol > li',
    ).length
  ) {
    const link = (
      document?.querySelector(
        `#VPContent > div > div > div.content > div > main > div > div > details:nth-child(6) > ol > li:nth-child(${Number(params.q)}) > a`,
      )
    ).href

    if (link.includes(location.host)) return
    location.href = link
  } else {
    const target = String(params.q).toLowerCase()

    server.forEach((val) => {
      if (val.id === target) {
        location.href = val.link
      }
    })
  }
}

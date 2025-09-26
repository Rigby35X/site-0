const landingImage = new Proxy({"src":"/_astro/landing.D_wYLIJw.jpg","width":1920,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/assets/images/landing.jpg";
							}
							
							return target[name];
						}
					});

export { landingImage as l };

(function () {
	var storageKey = 'color-theme';
	var root = document.documentElement;

	function preferredTheme() {
		var saved = localStorage.getItem(storageKey);
		if (saved === 'light' || saved === 'dark') {
			return saved;
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function applyTheme(theme) {
		root.dataset.theme = theme;
		root.style.colorScheme = theme;

		var dark = theme === 'dark';
		document.querySelectorAll('[data-theme-toggle]').forEach(function (toggle) {
			toggle.setAttribute('aria-pressed', String(dark));
			toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
			toggle.querySelector('.theme-toggle__icon').textContent = dark ? '\u2600' : '\u263e';
		});
	}

	function createToggle(extraClass) {
		var toggle = document.createElement('button');
		toggle.className = 'theme-toggle ' + extraClass;
		toggle.type = 'button';
		toggle.setAttribute('data-theme-toggle', '');

		var icon = document.createElement('span');
		icon.className = 'theme-toggle__icon';
		icon.setAttribute('aria-hidden', 'true');
		toggle.appendChild(icon);
		return toggle;
	}

	/* 通常ページでは，既存メニューの末尾へデスクトップ用とモバイル用の切替ボタンを追加する． */
	function addMenuToggles() {
		var topnav = document.querySelector('.topnav');
		if (topnav && !topnav.querySelector('[data-theme-toggle]')) {
			topnav.appendChild(createToggle('theme-toggle--desktop-menu'));
		}

		var mobileList = document.querySelector('.mobilemenu__list');
		if (mobileList && !mobileList.querySelector('[data-theme-toggle]')) {
			var item = document.createElement('li');
			item.className = 'mobilemenu__item mobilemenu__theme-item';
			item.appendChild(createToggle('theme-toggle--mobile-menu'));
			mobileList.appendChild(item);
		}
	}

	function bindToggles() {
		document.querySelectorAll('[data-theme-toggle]').forEach(function (toggle) {
			if (toggle.dataset.themeBound === 'true') {
				return;
			}
			toggle.dataset.themeBound = 'true';
			toggle.addEventListener('click', function () {
				var nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
				localStorage.setItem(storageKey, nextTheme);
				applyTheme(nextTheme);
			});
		});
	}

	/* モバイルメニューをボタン，Enter，Spaceで開閉し，Escでも閉じられるようにする． */
	function bindMobileMenus() {
		document.querySelectorAll('.mobilemenu').forEach(function (menu) {
			var button = menu.querySelector('.mobilemenu__box');
			if (!button || button.dataset.menuBound === 'true') {
				return;
			}
			button.dataset.menuBound = 'true';

			function setOpen(open) {
				menu.classList.toggle('is-open', open);
				button.setAttribute('aria-expanded', String(open));
				button.setAttribute('aria-label', open ? button.dataset.closeLabel : button.dataset.openLabel);
			}

			button.addEventListener('click', function () {
				setOpen(!menu.classList.contains('is-open'));
			});

			document.addEventListener('keydown', function (event) {
				if (event.key === 'Escape' && menu.classList.contains('is-open')) {
					setOpen(false);
					button.focus();
				}
			});
		});
	}

	applyTheme(preferredTheme());

	document.addEventListener('DOMContentLoaded', function () {
		addMenuToggles();
		bindMobileMenus();
		applyTheme(preferredTheme());
		bindToggles();
	});
}());

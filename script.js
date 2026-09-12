/**
 * Ascend Labs - Production Client Engine
 * ----------------------------------------------------
 * Preserves the exact baseline interactions:
 *  - Mobile navigation toggle with '☰' / '×'
 *  - Contact enquiry validation & direct submission confirmation
 *  - Stores enquiries locally in localStorage for zero data loss
 *  - Interactive FAQ accordions
 *  - Engineering Notes filtering for DBATU & SPPU
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.ASCEND_CONFIG || {
    brand: { name: "ASCEND LABS", legalNotice: "Working brand identity - final legal company name to be confirmed during registration." },
    contact: { email: "contact@ascendlabs.in" }
  };

  /* 1. Mobile Menu Navigation */
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
    menuButton.textContent = expanded ? '☰' : '×';
  });

  document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  }));

  /* 2. Brand & Legal Copy Hydration */
  document.querySelectorAll('[data-config="brandName"]').forEach(el => {
    const brandName = config.brand?.name || "ASCEND LABS";
    if (brandName.toUpperCase() === "ASCEND LABS") {
      el.innerHTML = `ASCEND<span class="muted">LABS</span>`;
    } else {
      el.textContent = brandName;
    }
  });
  document.querySelectorAll('[data-config="legalNotice"]').forEach(el => {
    el.textContent = config.brand?.legalNotice || "Working brand identity - final legal company name to be confirmed during registration.";
  });
  document.querySelectorAll('[data-config="contactEmail"]').forEach(el => {
    if (el.tagName.toLowerCase() === 'a') {
      el.href = `mailto:${config.contact?.email || 'contact@ascendlabs.in'}`;
    }
    el.textContent = config.contact?.email || "contact@ascendlabs.in";
  });

  /* 3. Enquiry Form & Validation */
  const form = document.querySelector('#interest-form');
  const message = document.querySelector('.form-message');
  const interestSelect = document.querySelector('select[name="interest"]');
  const collegeGroup = document.querySelector('#college-field-group');
  const businessGroup = document.querySelector('#business-field-group');
  const collegeInput = document.querySelector('input[name="college"]');
  const businessInput = document.querySelector('input[name="business"]');
  const submitBtn = form?.querySelector('button[type="submit"]');

  function updateConditionalFields() {
    if (!interestSelect) return;
    const value = (interestSelect.value || '').toLowerCase();
    const isStudent = value.includes('intern') || value.includes('ambassador') || value.includes('notes');
    // Distinguish commercial business web builds from student web development internship
    const isBusinessWeb = (value.includes('web') && !value.includes('intern')) || value.includes('business');

    if (collegeGroup && collegeInput) {
      if (isStudent) {
        collegeGroup.classList.add('active');
        collegeInput.setAttribute('required', 'true');
      } else {
        collegeGroup.classList.remove('active');
        collegeInput.removeAttribute('required');
        collegeInput.value = '';
      }
    }

    if (businessGroup && businessInput) {
      if (isBusinessWeb) {
        businessGroup.classList.add('active');
        businessInput.setAttribute('required', 'true');
      } else {
        businessGroup.classList.remove('active');
        businessInput.removeAttribute('required');
        businessInput.value = '';
      }
    }
  }

  if (interestSelect) {
    interestSelect.addEventListener('change', updateConditionalFields);
    // Initial sync
    updateConditionalFields();
  }

  // Pre-selection via URL parameter (e.g. ?interest=... or ?domain=...)
  const params = new URLSearchParams(window.location.search);
  const interestParam = params.get('interest') || params.get('domain');
  if (interestParam && interestSelect) {
    const p = interestParam.toLowerCase();
    for (let opt of interestSelect.options) {
      const v = opt.value.toLowerCase();
      if (
        (p.includes('web') && v.includes('web') && v.includes('intern')) ||
        (p.includes('python') && v.includes('python')) ||
        (p.includes('java') && v.includes('java')) ||
        (p.includes('data') && v.includes('data')) ||
        (p.includes('ui') && v.includes('ui')) ||
        (p.includes('cloud') && v.includes('cloud')) ||
        (p.includes('intern') && !p.includes('web') && v.includes('intern')) ||
        (p.includes('ambassador') && v.includes('ambassador')) ||
        (p.includes('notes') && v.includes('notes')) ||
        (p.includes('business') && v.includes('web') && !v.includes('intern'))
      ) {
        interestSelect.value = opt.value;
        updateConditionalFields();
        break;
      }
    }
  }

  // Universal Interactive Application Redirect & Smooth Focus Engine
  function triggerApplicationInterface(targetHash, domainVal) {
    let targetSection = null;
    if (targetHash && targetHash.startsWith('#')) {
      targetSection = document.querySelector(targetHash);
    }
    if (!targetSection) {
      // Fallback: locate active application/enquiry section on the active page
      targetSection = document.querySelector('#contact') || 
                      document.querySelector('#apply') || 
                      document.querySelector('#quote') || 
                      document.querySelector('#subscribe') || 
                      document.querySelector('#enquiry') ||
                      document.querySelector('form');
    }
    if (!targetSection) return;

    // Smoothly scroll to the target section with sticky navbar offset
    const headerOffset = 64;
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });

    // Identify target form and interest select
    const targetForm = (targetSection.tagName && targetSection.tagName.toLowerCase() === 'form' ? targetSection : targetSection.querySelector('form')) || document.querySelector('#interest-form');
    const selectEl = targetForm?.querySelector('select[name="interest"]') || interestSelect;

    if (selectEl && domainVal) {
      const d = domainVal.toLowerCase();
      let matched = false;
      for (let opt of selectEl.options) {
        const v = opt.value.toLowerCase();
        if (
          v === d ||
          v.includes(d) ||
          (d.includes('web') && d.includes('intern') && v.includes('web') && v.includes('intern')) ||
          (d.includes('web') && !d.includes('intern') && v.includes('web') && !v.includes('intern')) ||
          (d.includes('intern') && !d.includes('web') && v.includes('intern')) ||
          (d.includes('python') && v.includes('python')) ||
          (d.includes('java') && v.includes('java')) ||
          (d.includes('data') && v.includes('data')) ||
          (d.includes('ui') && v.includes('ui')) ||
          (d.includes('cloud') && v.includes('cloud')) ||
          (d.includes('ambassador') && v.includes('ambassador')) ||
          (d.includes('notes') && v.includes('notes')) ||
          (d.includes('business') && v.includes('web') && !v.includes('intern'))
        ) {
          selectEl.value = opt.value;
          matched = true;
          break;
        }
      }
      if (!matched && selectEl.options.length > 1) {
        if (d.includes('intern')) {
          for (let opt of selectEl.options) {
            if (opt.value.toLowerCase().includes('intern')) {
              selectEl.value = opt.value;
              break;
            }
          }
        }
      }
      updateConditionalFields();
      selectEl.classList.remove('field-highlight-active');
      void selectEl.offsetWidth;
      selectEl.classList.add('field-highlight-active');

      // Update active state on quick-domain-pills if present
      document.querySelectorAll('.quick-domain-pill').forEach(pill => {
        const pillDomain = (pill.getAttribute('data-select-domain') || '').toLowerCase();
        if (pillDomain && (selectEl.value.toLowerCase().includes(pillDomain) || pillDomain.includes(selectEl.value.toLowerCase()))) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });
    }

    // Auto-focus the Name input after scroll completes
    setTimeout(() => {
      const nameField = targetForm?.querySelector('input[name="name"]');
      if (nameField) {
        nameField.focus({ preventScroll: true });
        nameField.classList.remove('field-highlight-active');
        void nameField.offsetWidth;
        nameField.classList.add('field-highlight-active');
        setTimeout(() => nameField.classList.remove('field-highlight-active'), 2200);
      }
    }, 450);
  }

  // Universal click listener across buttons, cards, pills, and links
  document.addEventListener('click', (e) => {
    // Check if clicked element or parent is an action trigger
    const trigger = e.target.closest('[data-select-domain], a[href^="#contact"], a[href^="#apply"], a[href^="#quote"], a[href^="#subscribe"], a[href^="#enquiry"], .domain-card, .quick-domain-pill, .hero-quad-card');
    if (!trigger) return;

    // If user clicked an internal subpage link inside a card (e.g. "View syllabus ->"), let it navigate normally
    const explicitSubpageLink = e.target.closest('a');
    if (explicitSubpageLink && explicitSubpageLink !== trigger && !explicitSubpageLink.getAttribute('href')?.startsWith('#')) {
      return;
    }

    const href = trigger.getAttribute('href') || trigger.querySelector('a')?.getAttribute('href') || '#contact';
    const domainVal = trigger.getAttribute('data-select-domain') || trigger.getAttribute('data-domain') || '';

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const hrefParts = href.split('#');
    const isSamePage = href.startsWith('#') || hrefParts[0] === '' || hrefParts[0] === currentPath;

    if (isSamePage) {
      e.preventDefault();
      const targetHash = hrefParts[1] ? ('#' + hrefParts[1]) : '#contact';
      triggerApplicationInterface(targetHash, domainVal);
      if (history.pushState) {
        history.pushState(null, null, targetHash);
      }
    }
  });

  // Handle on-load hash (e.g. page opened with #contact or #apply in URL)
  if (window.location.hash) {
    const initialHash = window.location.hash;
    if (['#contact', '#apply', '#quote', '#subscribe', '#enquiry'].includes(initialHash)) {
      setTimeout(() => {
        triggerApplicationInterface(initialHash, interestParam || '');
      }, 350);
    }
  }

  // Clear errors on typing
  form?.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      const err = input.parentElement?.querySelector('.field-error-msg');
      if (err) err.classList.remove('visible');
    });
  });

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (message) {
      message.className = 'form-message';
      message.textContent = '';
    }

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();
    const interest = (formData.get('interest') || '').toString().trim();
    const college = (formData.get('college') || '').toString().trim();
    const business = (formData.get('business') || '').toString().trim();
    const customMessage = (formData.get('message') || '').toString().trim();

    let hasError = false;
    function flagError(fieldName, errorText) {
      hasError = true;
      const el = form.querySelector(`[name="${fieldName}"]`);
      if (el) {
        el.classList.add('is-invalid');
        const err = el.parentElement?.querySelector('.field-error-msg');
        if (err) {
          err.textContent = errorText;
          err.classList.add('visible');
        }
      }
    }

    if (name.length < 2) {
      flagError('name', 'Please enter your name.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      flagError('email', 'Please enter a valid email address.');
    }

    if (phone && phone.replace(/\D/g, '').length < 10) {
      flagError('phone', 'Please enter a valid 10-digit number.');
    }

    if (!interest) {
      flagError('interest', 'Please choose an area of interest.');
    }

    const isStudent = interest.toLowerCase().includes('intern') || interest.toLowerCase().includes('ambassador') || interest.toLowerCase().includes('notes');
    const isBusinessWeb = (interest.toLowerCase().includes('web') && !interest.toLowerCase().includes('intern')) || interest.toLowerCase().includes('business');

    if (isStudent && collegeInput && college.length < 2) {
      flagError('college', 'Please enter your college or university.');
    }

    if (isBusinessWeb && businessInput && business.length < 2) {
      flagError('business', 'Please enter your business or project name.');
    }

    if (hasError) return;

    let trackingTag = "general";
    if (interest.toLowerCase().includes('intern')) trackingTag = "internship";
    else if (interest.toLowerCase().includes('ambassador')) trackingTag = "ambassador";
    else if (interest.toLowerCase().includes('web')) trackingTag = "web-development";
    else if (interest.toLowerCase().includes('notes')) trackingTag = "engineering-notes";

    const payload = {
      id: "enq_" + Date.now(),
      name,
      email,
      phone: phone || "Not provided",
      interest,
      trackingTag,
      organization: college || business || "N/A",
      message: customMessage || "N/A",
      submittedAt: new Date().toISOString()
    };

    // Save to localStorage so no submissions are ever lost
    try {
      const stored = JSON.parse(localStorage.getItem('ascend_labs_enquiries') || '[]');
      stored.push(payload);
      localStorage.setItem('ascend_labs_enquiries', JSON.stringify(stored));
    } catch (e) {
      // Local storage fallback
    }

    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send enquiry <span>↗</span>';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending enquiry... ⏳';
    }

    // If an external endpoint is configured in site-config, post quietly
    const endpoint = config.form?.endpoint?.trim();
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (e) {
        // Quiet fallback
      }
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
      if (message) {
        message.className = 'form-message success';
        const cleanPhone = (config.contact?.phone || '+919876543210').replace(/\D/g, '');
        const waText = encodeURIComponent(`Hi Ascend Labs! I just submitted an enquiry for ${interest}. My name is ${name}.`);
        message.innerHTML = `
          <strong>✓ Thank you, ${name}!</strong> Your enquiry for <em>${interest}</em> has been registered. We review every application and respond within 24–48 hours.<br />
          <span style="display:inline-block; margin-top:8px; font-size:11px;">
            Need an immediate update? <a href="https://wa.me/${cleanPhone}?text=${waText}" target="_blank" rel="noopener noreferrer" style="color:var(--lime); text-decoration:underline; font-weight:700;">Chat directly on WhatsApp ↗</a>
          </span>
        `;
      }
      form.reset();
      updateConditionalFields();
    }, 400);
  });

  /* 4. Accessible FAQ Accordions */
  document.querySelectorAll('.faq-item').forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.parentElement?.querySelectorAll('.faq-item').forEach(sibling => {
        sibling.classList.remove('open');
        sibling.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* 5. Engineering Notes Filtering Engine */
  const notesContainer = document.querySelector('#notes-cards-container');
  const emptyStateEl = document.querySelector('#notes-empty-state');
  const univTabs = document.querySelectorAll('.univ-tab');
  const branchSelect = document.querySelector('#notes-branch-filter');
  const semSelect = document.querySelector('#notes-sem-filter');
  const searchInput = document.querySelector('#notes-search-input');
  const notesCountEl = document.querySelector('#notes-result-count');

  if (notesContainer && config.notesHub) {
    let currentUniv = 'dbatu';

    function renderNotes() {
      const branchVal = branchSelect ? branchSelect.value : 'all';
      const semVal = semSelect ? semSelect.value : 'all';
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const allSubjects = config.notesHub.subjects || [];

      const filtered = allSubjects.filter(sub => {
        if (sub.university !== currentUniv) return false;
        if (branchVal !== 'all' && sub.branch !== branchVal) return false;
        if (semVal !== 'all' && sub.semester !== semVal) return false;
        if (query) {
          const match = (sub.title || '').toLowerCase().includes(query) ||
                        (sub.code || '').toLowerCase().includes(query) ||
                        (sub.description || '').toLowerCase().includes(query);
          if (!match) return false;
        }
        return true;
      });

      if (notesCountEl) {
        notesCountEl.textContent = `${filtered.length} subject${filtered.length === 1 ? '' : 's'} listed`;
      }

      if (filtered.length === 0) {
        notesContainer.style.display = 'none';
        if (emptyStateEl) emptyStateEl.style.display = 'block';
      } else {
        notesContainer.style.display = 'grid';
        if (emptyStateEl) emptyStateEl.style.display = 'none';

        notesContainer.innerHTML = filtered.map(sub => `
          <article class="note-item-card">
            <div class="note-item-header">
              <span class="note-code">${sub.code}</span>
              <span class="badge ${sub.status === 'Syllabus Aligned' ? 'badge-dark' : 'badge-orange'}">${sub.status}</span>
            </div>
            <h3>${sub.title}</h3>
            <p>${sub.description}</p>
            <div style="margin-bottom: 12px; font-size: 10px; font-family: var(--mono); color: #7b8e89;">
              <span>${sub.units}</span> • <span>${sub.syllabusRev}</span>
            </div>
            <div class="note-meta-foot">
              <span>Updated ${sub.lastUpdated}</span>
              <a href="contact.html?interest=notes" class="text-link" style="font-size: 11px;">Join update list <span>↗</span></a>
            </div>
          </article>
        `).join('');
      }
    }

    univTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        univTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentUniv = tab.getAttribute('data-univ') || 'dbatu';
        renderNotes();
      });
    });

    branchSelect?.addEventListener('change', renderNotes);
    semSelect?.addEventListener('change', renderNotes);
    searchInput?.addEventListener('input', renderNotes);
    renderNotes();
  }

  /* 6. Active Navigation State */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPath = href.split('#')[0];
    if (linkPath && linkPath === currentPath) {
      link.classList.add('nav-link-active');
    }
  });
});


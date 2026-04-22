import { useEffect, useMemo, useRef, useState } from 'react';
import { Section, SectionTitle } from '../ui';
import { useLanguage } from '../../hooks';
import './Technology3D.css';

const TECH_BASE = [
  {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    color: '#61DAFB',
    category: 'frontend',
    level: 92,
    orbitOffset: 0,
    vi: {
      desc: 'Thư viện UI mạnh mẽ để xây dựng SPA, dashboard và component system hiện đại.',
      tag: 'UI Architecture',
    },
    en: {
      desc: 'A powerful UI library for building modern SPAs, dashboards, and component systems.',
      tag: 'UI Architecture',
    },
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '✨',
    color: '#F7DF1E',
    category: 'language',
    level: 90,
    orbitOffset: 0.2,
    vi: {
      desc: 'Ngôn ngữ cốt lõi cho trải nghiệm tương tác, animation và logic phía client.',
      tag: 'Core Language',
    },
    en: {
      desc: 'The core language for interactive experiences, animation, and client-side logic.',
      tag: 'Core Language',
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '📘',
    color: '#3178C6',
    category: 'language',
    level: 88,
    orbitOffset: 0.35,
    vi: {
      desc: 'Giúp code an toàn hơn, dễ maintain hơn, đặc biệt với dự án lớn.',
      tag: 'Type Safety',
    },
    en: {
      desc: 'Makes code safer and easier to maintain, especially in large projects.',
      tag: 'Type Safety',
    },
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: '▲',
    color: '#FFFFFF',
    category: 'frontend',
    level: 87,
    orbitOffset: 0.5,
    vi: {
      desc: 'Framework React tối ưu cho SSR, SEO, routing và app hiện đại.',
      tag: 'Full-stack React',
    },
    en: {
      desc: 'A React framework optimized for SSR, SEO, routing, and modern applications.',
      tag: 'Full-stack React',
    },
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: '🟢',
    color: '#339933',
    category: 'backend',
    level: 83,
    orbitOffset: 0.7,
    vi: {
      desc: 'Xây API, realtime service và công cụ backend nhanh, linh hoạt.',
      tag: 'Backend Runtime',
    },
    en: {
      desc: 'Build fast and flexible APIs, realtime services, and backend tooling.',
      tag: 'Backend Runtime',
    },
  },
  {
    id: 'flutter',
    name: 'Flutter',
    icon: '📱',
    color: '#02569B',
    category: 'mobile',
    level: 80,
    orbitOffset: 0.9,
    vi: {
      desc: 'Phát triển ứng dụng đa nền tảng với UI mượt mà và thống nhất.',
      tag: 'Cross-platform Mobile',
    },
    en: {
      desc: 'Build cross-platform apps with smooth and consistent UI.',
      tag: 'Cross-platform Mobile',
    },
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: '🎨',
    color: '#A259FF',
    category: 'design',
    level: 85,
    orbitOffset: 1.1,
    vi: {
      desc: 'Thiết kế UI/UX, design system, prototype và handoff hiệu quả.',
      tag: 'UI/UX Design',
    },
    en: {
      desc: 'Create UI/UX, design systems, prototypes, and efficient handoff.',
      tag: 'UI/UX Design',
    },
  },
  {
    id: 'move-sui',
    name: 'Move (SUI)',
    icon: '🔗',
    color: '#6FB5EC',
    category: 'blockchain',
    level: 72,
    orbitOffset: 1.3,
    vi: {
      desc: 'Xây dựng smart contract an toàn hơn với mô hình tài nguyên mạnh.',
      tag: 'Smart Contract',
    },
    en: {
      desc: 'Build safer smart contracts with a robust resource-oriented model.',
      tag: 'Smart Contract',
    },
  },
];

const CATEGORY_LABELS = {
  vi: {
    all: 'Tất cả',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    design: 'Design',
    blockchain: 'Blockchain',
    language: 'Ngôn ngữ',
  },
  en: {
    all: 'All',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    design: 'Design',
    blockchain: 'Blockchain',
    language: 'Language',
  },
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(media.matches);
    onChange();

    if (media.addEventListener) media.addEventListener('change', onChange);
    else media.addListener(onChange);

    return () => {
      if (media.removeEventListener) media.removeEventListener('change', onChange);
      else media.removeListener(onChange);
    };
  }, []);

  return reduced;
}

export function Technology3D() {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();

  const stageRef = useRef(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const visibleRef = useRef(true);
  const rafRef = useRef(0);
  const rotationRef = useRef(0);
  const burstTimerRef = useRef(null);

  const [selectedId, setSelectedId] = useState(TECH_BASE[0].id);
  const [pinnedId, setPinnedId] = useState(null);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [speed, setSpeed] = useState(0.0065);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const t = language === 'vi'
    ? {
        title: 'Công Nghệ & Công Cụ',
        subtitle: 'Không chỉ biết dùng — tôi biến chúng thành trải nghiệm',
        desc: 'Một sân khấu công nghệ dạng 3D lab: lọc, tìm kiếm, focus, đảo chiều, tăng tốc và khám phá cách từng công nghệ đóng góp vào sản phẩm.',
        search: 'Tìm công nghệ...',
        pause: 'Tạm dừng',
        resume: 'Tiếp tục',
        reverse: 'Đảo chiều',
        burst: 'Tăng tốc',
        reset: 'Đặt lại',
        active: 'Đang chọn',
        total: 'Tổng',
        hint: 'Mẹo: click để pin, hover để focus, dùng ← → để điều hướng.',
        live: 'Đang hoạt động',
        board: 'TECH MATRIX',
        footer: 'Kết hợp design thinking, frontend engineering và hiệu ứng tương tác để tạo ra trải nghiệm hiện đại, giàu cảm xúc và có chiều sâu.',
        level: 'Mức độ',
        categoryLabel: 'Nhóm',
        orbit: 'Quỹ đạo',
        pinned: 'Đã ghim',
        focusTitle: 'Thông tin công nghệ',
      }
    : {
        title: 'Technologies & Tools',
        subtitle: 'Not just tools I use — tools I turn into experiences',
        desc: 'A 3D technology lab: filter, search, focus, reverse, boost speed, and explore how each technology contributes to the final product.',
        search: 'Search technology...',
        pause: 'Pause',
        resume: 'Resume',
        reverse: 'Reverse',
        burst: 'Burst',
        reset: 'Reset',
        active: 'Active',
        total: 'Total',
        hint: 'Tip: click to pin, hover to focus, use ← → for navigation.',
        live: 'Live',
        board: 'TECH MATRIX',
        footer: 'Combining design thinking, frontend engineering, and interaction effects to create modern, emotional, high-depth digital experiences.',
        level: 'Level',
        categoryLabel: 'Category',
        orbit: 'Orbit',
        pinned: 'Pinned',
        focusTitle: 'Technology focus',
      };

  const categories = useMemo(() => {
    const labels = CATEGORY_LABELS[language];
    return ['all', 'frontend', 'backend', 'mobile', 'design', 'blockchain', 'language'].map((key) => ({
      key,
      label: labels[key],
    }));
  }, [language]);

  const filteredTech = useMemo(() => {
    const q = search.trim().toLowerCase();

    return TECH_BASE.filter((item) => {
      const matchCategory = category === 'all' || item.category === category;
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item[language].tag.toLowerCase().includes(q) ||
        item[language].desc.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [language, category, search]);

  const selectedTech =
    filteredTech.find((item) => item.id === (pinnedId || selectedId)) ||
    TECH_BASE.find((item) => item.id === (pinnedId || selectedId)) ||
    TECH_BASE[0];

  useEffect(() => {
    if (!filteredTech.length) return;

    const stillExists = filteredTech.some((item) => item.id === selectedId);
    if (!stillExists) setSelectedId(filteredTech[0].id);

    if (pinnedId && !filteredTech.some((item) => item.id === pinnedId)) {
      setPinnedId(null);
    }
  }, [filteredTech, selectedId, pinnedId]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );

    io.observe(stage);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const animate = () => {
      if (!paused && visibleRef.current && itemRefs.current.length) {
        rotationRef.current += speed * direction;

        const count = itemRefs.current.length;
        const radiusX = window.innerWidth < 768 ? 135 : 220;
        const radiusZ = window.innerWidth < 768 ? 90 : 150;
        const radiusY = window.innerWidth < 768 ? 18 : 28;

        itemRefs.current.forEach((node, index) => {
          if (!node) return;

          const tech = filteredTech[index];
          if (!tech) return;

          const angle = rotationRef.current + (index / count) * Math.PI * 2 + tech.orbitOffset;
          const x = Math.cos(angle) * radiusX;
          const z = Math.sin(angle) * radiusZ;
          const y = Math.sin(angle * 1.6 + index) * radiusY;

          const depth = (z + radiusZ) / (radiusZ * 2); // 0 -> 1
          const scale = 0.72 + depth * 0.42;
          const opacity = 0.42 + depth * 0.65;
          const blur = Math.max(0, (1 - depth) * 1.2);
          const rotateY = (-x / radiusX) * 16;

          node.style.transform =
            `translate3d(${x}px, ${y}px, ${z}px) translate(-50%, -50%) scale(${scale}) rotateY(${rotateY}deg)`;
          node.style.opacity = String(opacity);
          node.style.zIndex = String(Math.round(depth * 100));
          node.style.filter = `blur(${blur}px)`;
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [filteredTech, paused, direction, speed, reducedMotion]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!filteredTech.length) return;

      const currentId = pinnedId || selectedId;
      const currentIndex = Math.max(
        0,
        filteredTech.findIndex((item) => item.id === currentId)
      );

      if (e.key === 'ArrowRight') {
        const next = filteredTech[(currentIndex + 1) % filteredTech.length];
        setSelectedId(next.id);
        setPinnedId(null);
      }

      if (e.key === 'ArrowLeft') {
        const prev = filteredTech[(currentIndex - 1 + filteredTech.length) % filteredTech.length];
        setSelectedId(prev.id);
        setPinnedId(null);
      }

      if (e.key === ' ') {
        e.preventDefault();
        setPinnedId((prev) => (prev === currentId ? null : currentId));
      }

      if (e.key === 'Escape') {
        setPinnedId(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [filteredTech, selectedId, pinnedId]);

  useEffect(() => {
    return () => {
      if (burstTimerRef.current) clearTimeout(burstTimerRef.current);
    };
  }, []);

  const handlePointerMove = (e) => {
    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;

    stage.style.setProperty('--px', `${px}%`);
    stage.style.setProperty('--py', `${py}%`);

    const rotateX = ((py - 50) / 50) * -4;
    const rotateY = ((px - 50) / 50) * 6;
    stage.style.setProperty('--rx', `${rotateX}deg`);
    stage.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handlePointerLeave = () => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty('--px', '50%');
    stage.style.setProperty('--py', '50%');
    stage.style.setProperty('--rx', '0deg');
    stage.style.setProperty('--ry', '0deg');
  };

  const handleBurst = () => {
    if (burstTimerRef.current) clearTimeout(burstTimerRef.current);
    const prev = speed;
    setSpeed(0.021);

    burstTimerRef.current = setTimeout(() => {
      setSpeed(prev);
    }, 2200);
  };

  const handleReset = () => {
    setSearch('');
    setCategory('all');
    setPaused(false);
    setDirection(1);
    setSpeed(0.0065);
    setPinnedId(null);
    setSelectedId(TECH_BASE[0].id);
  };

  const progressValue = Math.round((filteredTech.length / TECH_BASE.length) * 100);

  return (
    <Section id="technology-3d-pro">
      <div className="container">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="techlab-wrapper">
          <div className="techlab-shell">
            {/* LEFT PANEL */}
            <aside className="techlab-left">
              <div className="techlab-card">
                <div className="techlab-label">
                  <span className="pulse-dot" />
                  <span>{t.live}</span>
                </div>

                <h3 className="techlab-title">{t.title}</h3>
                <p className="techlab-desc">{t.desc}</p>

                <div className="techlab-toolbar">
                  <input
                    className="techlab-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t.search}
                    aria-label={t.search}
                  />
                </div>

                <div className="techlab-filters">
                  {categories.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      className={`filter-pill ${category === item.key ? 'is-active' : ''}`}
                      onClick={() => setCategory(item.key)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="techlab-progress">
                  <div className="progress-top">
                    <span>{t.active}</span>
                    <strong className="mono">
                      {filteredTech.length} / {TECH_BASE.length}
                    </strong>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progressValue}%` }}
                    />
                  </div>

                  <div className="progress-hint">{t.hint}</div>
                </div>

                <div className="techlab-actions">
                  <button
                    type="button"
                    className="techlab-btn"
                    onClick={() => setPaused((p) => !p)}
                  >
                    {paused ? t.resume : t.pause}
                  </button>

                  <button
                    type="button"
                    className="techlab-btn ghost"
                    onClick={() => setDirection((d) => d * -1)}
                  >
                    {t.reverse}
                  </button>

                  <button
                    type="button"
                    className="techlab-btn ghost"
                    onClick={handleBurst}
                  >
                    {t.burst}
                  </button>

                  <button
                    type="button"
                    className="techlab-btn ghost"
                    onClick={handleReset}
                  >
                    {t.reset}
                  </button>
                </div>
              </div>

              <div className="techlab-focus" style={{ '--c': selectedTech.color }}>
                <div className="focus-head">
                  <div className="focus-icon">{selectedTech.icon}</div>
                  <div>
                    <div className="focus-name">{selectedTech.name}</div>
                    <div className="focus-sub">{selectedTech[language].tag}</div>
                  </div>
                </div>

                <p className="focus-desc">{selectedTech[language].desc}</p>

                <div className="focus-level">
                  <div className="focus-level-top">
                    <span>{t.level}</span>
                    <strong>{selectedTech.level}%</strong>
                  </div>
                  <div className="focus-level-bar">
                    <div
                      className="focus-level-fill"
                      style={{
                        width: `${selectedTech.level}%`,
                        background: `linear-gradient(90deg, ${selectedTech.color}, rgba(255,255,255,.9))`,
                      }}
                    />
                  </div>
                </div>

                <div className="focus-meta">
                  <span className="meta-pill">
                    {t.categoryLabel}: {CATEGORY_LABELS[language][selectedTech.category]}
                  </span>
                  <span className="meta-pill">
                    {t.orbit}: {selectedTech.orbitOffset.toFixed(2)}
                  </span>
                  {pinnedId === selectedTech.id && (
                    <span className="meta-pill accent">{t.pinned}</span>
                  )}
                </div>
              </div>
            </aside>

            {/* STAGE */}
            <div
              ref={stageRef}
              className={`techlab-stage ${paused ? 'is-paused' : ''}`}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >
              <div className="board-frame">
                <span className="screw tl" />
                <span className="screw tr" />
                <span className="screw bl" />
                <span className="screw br" />
                <div className="frame-label">{t.board}</div>
              </div>

              <div className="stage-grid" />
              <div className="scanner-beam" />
              <div className="ambient-ring" />

              <div className="tech-3d-container-pro" ref={containerRef}>
                {filteredTech.map((tech, index) => {
                  const isActive = (pinnedId || selectedId) === tech.id;
                  const isPinned = pinnedId === tech.id;

                  return (
                    <button
                      key={tech.id}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      type="button"
                      className={`chip ${isActive ? 'active' : ''} ${isPinned ? 'pinned' : ''}`}
                      style={{
                        '--c': tech.color,
                        left: '50%',
                        top: '50%',
                      }}
                      onMouseEnter={() => {
                        if (!pinnedId) setSelectedId(tech.id);
                      }}
                      onFocus={() => {
                        if (!pinnedId) setSelectedId(tech.id);
                      }}
                      onClick={() => {
                        setSelectedId(tech.id);
                        setPinnedId((prev) => (prev === tech.id ? null : tech.id));
                      }}
                      aria-pressed={isPinned}
                    >
                      <div className="chip-glow" />
                      <div className="chip-face">
                        <div className="chip-noise" />
                        <div className="chip-topline">
                          <span className="chip-category">
                            {CATEGORY_LABELS[language][tech.category]}
                          </span>
                          <span className="chip-level">{tech.level}%</span>
                        </div>

                        <span className="chip-icon">{tech.icon}</span>
                        <h3 className="chip-name">{tech.name}</h3>
                        <p className="chip-tag">{tech[language].tag}</p>

                        <div className="chip-meter">
                          <div
                            className="chip-meter-fill"
                            style={{
                              width: `${tech.level}%`,
                              background: `linear-gradient(90deg, ${tech.color}, rgba(255,255,255,.85))`,
                            }}
                          />
                        </div>

                        <div className="chip-ports" aria-hidden="true">
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    </button>
                  );
                })}

                {!filteredTech.length && (
                  <div className="techlab-empty">
                    <p>{language === 'vi' ? 'Không tìm thấy công nghệ phù hợp.' : 'No matching technologies found.'}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="techlab-footer">
            <p>{t.footer}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
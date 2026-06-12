import { useEffect, useRef, useState } from "react";
import {
  Folder as LucideFolder,
  FolderOpen as LucideFolderOpen,
  FileCode as LucideFileCode,
  X as LucideX,
  Copy as LucideCopy,
  Check as LucideCheck,
  Search as LucideSearch,
  ChevronRight as LucideChevronRight,
  ChevronDown as LucideChevronDown,
  Terminal as LucideTerminal,
  ExternalLink as LucideExternalLink,
  Code as LucideCode,
  FileImage as LucideFileImage
} from "lucide-react";

const Folder = LucideFolder as any;
const FolderOpen = LucideFolderOpen as any;
const FileCode = LucideFileCode as any;
const X = LucideX as any;
const Copy = LucideCopy as any;
const Check = LucideCheck as any;
const Search = LucideSearch as any;
const ChevronRight = LucideChevronRight as any;
const ChevronDown = LucideChevronDown as any;
const Terminal = LucideTerminal as any;
const ExternalLink = LucideExternalLink as any;
const Code = LucideCode as any;
const FileImage = LucideFileImage as any;

export interface FileNode {
  name: string;
  path: string;
  type: "file" | "directory";
  children?: FileNode[];
}

export const projectFilesMap: Record<string, FileNode[]> = {
  "week-06": [
    { name: "index.html", path: "index.html", type: "file" },
    { name: "package.json", path: "package.json", type: "file" },
    { name: "vite.config.ts", path: "vite.config.ts", type: "file" },
    { name: "README.md", path: "README.md", type: "file" },
    { name: "ATTRIBUTIONS.md", path: "ATTRIBUTIONS.md", type: "file" },
    {
      name: "src",
      path: "src",
      type: "directory",
      children: [
        { name: "main.tsx", path: "src/main.tsx", type: "file" },
        {
          name: "app",
          path: "src/app",
          type: "directory",
          children: [
            { name: "App.tsx", path: "src/app/App.tsx", type: "file" },
            {
              name: "components",
              path: "src/app/components",
              type: "directory",
              children: [
                { name: "code-viewer.tsx", path: "src/app/components/code-viewer.tsx", type: "file" },
                {
                  name: "media",
                  path: "src/app/components/media",
                  type: "directory",
                  children: [
                    { name: "ImageWithFallback.tsx", path: "src/app/components/media/ImageWithFallback.tsx", type: "file" }
                  ]
                },
                {
                  name: "ui",
                  path: "src/app/components/ui",
                  type: "directory",
                  children: [
                    { name: "accordion.tsx", path: "src/app/components/ui/accordion.tsx", type: "file" },
                    { name: "alert-dialog.tsx", path: "src/app/components/ui/alert-dialog.tsx", type: "file" },
                    { name: "alert.tsx", path: "src/app/components/ui/alert.tsx", type: "file" },
                    { name: "aspect-ratio.tsx", path: "src/app/components/ui/aspect-ratio.tsx", type: "file" },
                    { name: "avatar.tsx", path: "src/app/components/ui/avatar.tsx", type: "file" },
                    { name: "badge.tsx", path: "src/app/components/ui/badge.tsx", type: "file" },
                    { name: "breadcrumb.tsx", path: "src/app/components/ui/breadcrumb.tsx", type: "file" },
                    { name: "button.tsx", path: "src/app/components/ui/button.tsx", type: "file" },
                    { name: "calendar.tsx", path: "src/app/components/ui/calendar.tsx", type: "file" },
                    { name: "card.tsx", path: "src/app/components/ui/card.tsx", type: "file" },
                    { name: "carousel.tsx", path: "src/app/components/ui/carousel.tsx", type: "file" },
                    { name: "chart.tsx", path: "src/app/components/ui/chart.tsx", type: "file" },
                    { name: "checkbox.tsx", path: "src/app/components/ui/checkbox.tsx", type: "file" },
                    { name: "collapsible.tsx", path: "src/app/components/ui/collapsible.tsx", type: "file" },
                    { name: "command.tsx", path: "src/app/components/ui/command.tsx", type: "file" },
                    { name: "context-menu.tsx", path: "src/app/components/ui/context-menu.tsx", type: "file" },
                    { name: "dialog.tsx", path: "src/app/components/ui/dialog.tsx", type: "file" },
                    { name: "drawer.tsx", path: "src/app/components/ui/drawer.tsx", type: "file" },
                    { name: "dropdown-menu.tsx", path: "src/app/components/ui/dropdown-menu.tsx", type: "file" },
                    { name: "form.tsx", path: "src/app/components/ui/form.tsx", type: "file" },
                    { name: "hover-card.tsx", path: "src/app/components/ui/hover-card.tsx", type: "file" },
                    { name: "input-otp.tsx", path: "src/app/components/ui/input-otp.tsx", type: "file" },
                    { name: "input.tsx", path: "src/app/components/ui/input.tsx", type: "file" },
                    { name: "label.tsx", path: "src/app/components/ui/label.tsx", type: "file" },
                    { name: "menubar.tsx", path: "src/app/components/ui/menubar.tsx", type: "file" },
                    { name: "navigation-menu.tsx", path: "src/app/components/ui/navigation-menu.tsx", type: "file" },
                    { name: "pagination.tsx", path: "src/app/components/ui/pagination.tsx", type: "file" },
                    { name: "popover.tsx", path: "src/app/components/ui/popover.tsx", type: "file" },
                    { name: "progress.tsx", path: "src/app/components/ui/progress.tsx", type: "file" },
                    { name: "radio-group.tsx", path: "src/app/components/ui/radio-group.tsx", type: "file" },
                    { name: "resizable.tsx", path: "src/app/components/ui/resizable.tsx", type: "file" },
                    { name: "scroll-area.tsx", path: "src/app/components/ui/scroll-area.tsx", type: "file" },
                    { name: "select.tsx", path: "src/app/components/ui/select.tsx", type: "file" },
                    { name: "separator.tsx", path: "src/app/components/ui/separator.tsx", type: "file" },
                    { name: "sheet.tsx", path: "src/app/components/ui/sheet.tsx", type: "file" },
                    { name: "sidebar.tsx", path: "src/app/components/ui/sidebar.tsx", type: "file" },
                    { name: "skeleton.tsx", path: "src/app/components/ui/skeleton.tsx", type: "file" },
                    { name: "slider.tsx", path: "src/app/components/ui/slider.tsx", type: "file" },
                    { name: "sonner.tsx", path: "src/app/components/ui/sonner.tsx", type: "file" },
                    { name: "switch.tsx", path: "src/app/components/ui/switch.tsx", type: "file" },
                    { name: "table.tsx", path: "src/app/components/ui/table.tsx", type: "file" },
                    { name: "tabs.tsx", path: "src/app/components/ui/tabs.tsx", type: "file" },
                    { name: "textarea.tsx", path: "src/app/components/ui/textarea.tsx", type: "file" },
                    { name: "toggle-group.tsx", path: "src/app/components/ui/toggle-group.tsx", type: "file" },
                    { name: "toggle.tsx", path: "src/app/components/ui/toggle.tsx", type: "file" },
                    { name: "tooltip.tsx", path: "src/app/components/ui/tooltip.tsx", type: "file" },
                    { name: "use-mobile.ts", path: "src/app/components/ui/use-mobile.ts", type: "file" },
                    { name: "utils.ts", path: "src/app/components/ui/utils.ts", type: "file" }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "styles",
          path: "src/styles",
          type: "directory",
          children: [
            { name: "fonts.css", path: "src/styles/fonts.css", type: "file" },
            { name: "globals.css", path: "src/styles/globals.css", type: "file" },
            { name: "index.css", path: "src/styles/index.css", type: "file" },
            { name: "tailwind.css", path: "src/styles/tailwind.css", type: "file" },
            { name: "theme.css", path: "src/styles/theme.css", type: "file" }
          ]
        }
      ]
    }
  ]
};

const getProjectTitle = (slug: string): string => {
  if (slug === "week-06") return "Week 06 - AI trong Học thuật";
  return "Source Code";
};

const getFileLanguage = (fileName: string): string => {
  const ext = fileName.split(".").pop()?.toLowerCase();
  if (ext === "html") return "markup";
  if (ext === "css") return "css";
  if (ext === "js") return "javascript";
  if (ext === "ts" || ext === "tsx") return "typescript";
  if (ext === "json") return "json";
  if (ext === "md") return "markdown";
  return "text";
};

const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
};

const loadPrismAssets = async (): Promise<any> => {
  if ((window as any).Prism) return (window as any).Prism;

  const cssUrl = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css";
  if (!document.querySelector(`link[href="${cssUrl}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    document.head.appendChild(link);
  }

  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js");

  const languages = ["markup", "css", "javascript", "typescript", "jsx", "tsx", "markdown"];
  for (const lang of languages) {
    const langUrl = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${lang}.min.js`;
    try {
      await loadScript(langUrl);
    } catch (e) {
      console.warn(`Prism failed to load language: ${lang}`, e);
    }
  }

  return (window as any).Prism;
};

export function CodeExplorer({
  projectSlug,
  onClose
}: {
  projectSlug: string;
  onClose: () => void;
}) {
  const files = projectFilesMap[projectSlug] || [];
  
  const findFirstFile = (nodes: FileNode[]): string => {
    for (const node of nodes) {
      if (node.type === "file") return node.path;
      if (node.type === "directory" && node.children) {
        const found = findFirstFile(node.children);
        if (found) return found;
      }
    }
    return "";
  };

  const initialFilePath = findFirstFile(files);

  const [activeFile, setActiveFile] = useState<string>(initialFilePath);
  const [openTabs, setOpenTabs] = useState<string[]>(initialFilePath ? [initialFilePath] : []);
  const [fileContent, setFileContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [expandedDirs, setExpandedDirs] = useState<Record<string, boolean>>({
    "src": true,
    "src/app": true,
    "src/app/components": true,
    "src/styles": true
  });
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const codeRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeFile) return;

    const activeFileName = activeFile.split("/").pop() || "";
    const isImage = ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(activeFileName.split(".").pop()?.toLowerCase() || "");
    
    if (isImage) {
      setFileContent("");
      setIsLoading(false);
      setError(null);
      return;
    }

    const fetchFile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const baseUrl = (import.meta as any).env?.BASE_URL || "/";
        const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
        const fileUrl = `${cleanBaseUrl}source-code/${projectSlug}/${activeFile}`;
        
        const res = await fetch(fileUrl);
        if (!res.ok) throw new Error(`Status ${res.status}: Không thể tải tệp`);
        const text = await res.text();
        setFileContent(text);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Đã xảy ra lỗi khi tải tệp.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFile();
  }, [activeFile, projectSlug]);

  useEffect(() => {
    if (isLoading || error || !fileContent) return;

    let mounted = true;
    loadPrismAssets().then((prism) => {
      if (mounted && prism && codeRef.current) {
        prism.highlightElement(codeRef.current);
      }
    });

    return () => {
      mounted = false;
    };
  }, [fileContent, activeFile, isLoading, error]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(fileContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectFile = (path: string) => {
    setActiveFile(path);
    if (!openTabs.includes(path)) {
      setOpenTabs([...openTabs, path]);
    }
  };

  const handleCloseTab = (path: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((t) => t !== path);
    setOpenTabs(newTabs);

    if (activeFile === path) {
      if (newTabs.length > 0) {
        setActiveFile(newTabs[newTabs.length - 1]);
      } else {
        setActiveFile("");
      }
    }
  };

  const toggleDirectory = (path: string) => {
    setExpandedDirs((prev) => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const activeFileName = activeFile.split("/").pop() || "";
  const activeLanguage = getFileLanguage(activeFileName);
  const lines = fileContent ? fileContent.split("\n") : [];

  const getFileSizeString = () => {
    const bytes = new Blob([fileContent]).size;
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(1)} KB`;
  };

  const renderExplorerNodes = (nodes: FileNode[], depth = 0) => {
    return nodes.map((node) => {
      const isExpanded = expandedDirs[node.path];
      const isSelected = activeFile === node.path;

      if (node.type === "directory") {
        return (
          <div key={node.path} className="w-full">
            <button
              onClick={() => toggleDirectory(node.path)}
              className="flex w-full items-center gap-1.5 py-1.5 hover:bg-white/5 px-2 text-stone-300 transition-colors text-xs font-mono"
              style={{ paddingLeft: `${depth * 12 + 8}px` }}
            >
              <span className="shrink-0 text-stone-500">
                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </span>
              <span className="shrink-0 text-[#ffb829] dark:text-[#ffb829]">
                {isExpanded ? <FolderOpen size={15} /> : <Folder size={15} />}
              </span>
              <span className="truncate">{node.name}</span>
            </button>
            {isExpanded && node.children && (
              <div className="w-full">
                {renderExplorerNodes(node.children, depth + 1)}
              </div>
            )}
          </div>
        );
      }

      const ext = node.name.split(".").pop()?.toLowerCase() || "";
      const isImg = ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext);
      let iconColor = "text-stone-400";
      if (ext === "html") iconColor = "text-orange-500";
      else if (ext === "css") iconColor = "text-blue-400";
      else if (ext === "js") iconColor = "text-yellow-400";
      else if (ext === "ts" || ext === "tsx") iconColor = "text-sky-400";
      else if (ext === "json") iconColor = "text-emerald-400";
      else if (isImg) iconColor = "text-purple-400";

      return (
        <button
          key={node.path}
          onClick={() => handleSelectFile(node.path)}
          className={`flex w-full items-center gap-2 py-1.5 px-2 hover:bg-white/5 transition-colors text-xs font-mono ${
            isSelected ? "bg-[#ffb829]/10 text-white font-medium border-l-2 border-[#ffb829]" : "text-stone-400"
          }`}
          style={{ paddingLeft: `${depth * 12 + 22}px` }}
        >
          <span className={`shrink-0 ${iconColor}`}>
            {isImg ? <FileImage size={14} /> : ext === "html" ? <Code size={14} /> : <FileCode size={14} />}
          </span>
          <span className="truncate">{node.name}</span>
        </button>
      );
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 md:p-6 backdrop-blur-md"
      ref={containerRef}
    >
      <div
        className="relative flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-stone-900 bg-[#0c0f16] text-[#c9d1d9] shadow-[10px_10px_0_0_#1c140d] dark:border-white/10 dark:shadow-[10px_10px_0_0_#ffb829]"
      >
        {/* Title bar */}
        <div className="flex h-12 items-center justify-between border-b border-stone-900 bg-[#080b10] px-4">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded bg-[#ffb829]/10 text-[#ffb829]">
              <Terminal size={14} />
            </span>
            <span className="font-mono text-sm font-semibold tracking-wide text-white">
              {getProjectTitle(projectSlug)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {activeFile && !isLoading && !error && (
              <div className="relative hidden items-center md:flex">
                <Search size={13} className="absolute left-2.5 text-stone-500" />
                <input
                  type="text"
                  placeholder="Tìm từ khóa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-7 w-48 rounded bg-stone-900 pl-8 pr-3 text-xs text-stone-200 outline-none border border-stone-800 focus:border-[#ffb829] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 text-stone-500 hover:text-stone-300"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            )}

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="grid h-8 w-8 place-items-center rounded hover:bg-white/5 text-stone-400 md:hidden"
            >
              <Code size={16} />
            </button>

            {activeFile && (
              <a
                href={`${(import.meta as any).env?.BASE_URL || "/"}source-code/${projectSlug}/${activeFile}`}
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded hover:bg-white/5 text-stone-400 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}

            {activeFile && !isLoading && !error && (
              <button
                onClick={handleCopy}
                className="grid h-8 w-8 place-items-center rounded hover:bg-white/5 text-stone-400 hover:text-[#ffb829] transition-colors"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            )}

            <button
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded hover:bg-[#e81123] text-stone-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Main Body Layout */}
        <div className="flex flex-1 overflow-hidden relative">
          <aside
            className={`absolute top-0 bottom-0 left-0 z-30 w-[240px] shrink-0 border-r border-stone-900 bg-[#080b10]/95 md:relative md:block md:bg-[#080b10] transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}
          >
            <div className="flex h-8 items-center border-b border-stone-900 px-3 bg-[#080b10]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500">
                Explorer
              </span>
            </div>
            <div className="h-[calc(100%-32px)] overflow-y-auto py-2">
              {renderExplorerNodes(files)}
            </div>
          </aside>

          {sidebarOpen && (
            <div
              onClick={() => setSidebarOpen(false)}
              className="absolute inset-0 bg-black/40 z-20 md:hidden"
            />
          )}

          <main className="flex flex-1 flex-col overflow-hidden bg-[#0c0f16]">
            {openTabs.length > 0 && (
              <div className="flex h-8 overflow-x-auto border-b border-stone-900 bg-[#080b10] select-none [&::-webkit-scrollbar]:hidden">
                {openTabs.map((path) => {
                  const name = path.split("/").pop() || "";
                  const isSelected = activeFile === path;
                  const ext = name.split(".").pop()?.toLowerCase() || "";
                  const isImg = ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext);
                  let iconColor = "text-stone-400";
                  if (ext === "html") iconColor = "text-orange-500";
                  else if (ext === "css") iconColor = "text-blue-400";
                  else if (ext === "js") iconColor = "text-yellow-400";
                  else if (ext === "ts" || ext === "tsx") iconColor = "text-sky-400";
                  else if (isImg) iconColor = "text-purple-400";

                  return (
                    <div
                      key={path}
                      onClick={() => handleSelectFile(path)}
                      className={`group flex h-full items-center gap-2 border-r border-stone-900 px-3.5 text-xs font-mono transition-colors cursor-pointer select-none ${
                        isSelected
                          ? "bg-[#0c0f16] text-[#ffb829] font-medium border-t border-t-[#ffb829]"
                          : "bg-[#080b10]/70 text-stone-500 hover:text-stone-300"
                      }`}
                    >
                      <span className={`shrink-0 ${iconColor}`}>
                        {isImg ? <FileImage size={12} /> : ext === "html" ? <Code size={12} /> : <FileCode size={12} />}
                      </span>
                      <span>{name}</span>
                      <button
                        onClick={(e) => handleCloseTab(path, e)}
                        className="rounded p-0.5 opacity-0 hover:bg-white/10 group-hover:opacity-100 hover:text-white"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex-1 overflow-auto p-4 font-mono relative leading-relaxed">
              {isLoading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-700 border-t-[#ffb829]" />
                  <p className="font-mono text-xs text-stone-500">Đang tải mã nguồn...</p>
                </div>
              ) : error ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <span className="text-red-500">⚠️</span>
                  <p className="text-sm font-semibold text-stone-300">{error}</p>
                  <button
                    onClick={() => setActiveFile(activeFile)}
                    className="rounded-full bg-[#ffb829] px-4 py-1.5 text-xs text-black font-semibold hover:scale-105 transition-transform"
                  >
                    Thử lại
                  </button>
                </div>
              ) : activeFile && ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(activeFile.split(".").pop()?.toLowerCase() || "") ? (
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-stone-900/10 overflow-auto">
                  <div className="max-w-full max-h-full flex flex-col items-center gap-4 bg-[#080b10]/95 p-6 rounded-2xl border border-stone-900 shadow-2xl">
                    <div className="overflow-auto max-w-[80vw] max-h-[60vh] border border-stone-950 rounded bg-[#151b26]/50">
                      <img
                        src={`${(import.meta as any).env?.BASE_URL || "/"}source-code/${projectSlug}/${activeFile}`}
                        alt={activeFile.split("/").pop() || ""}
                        className="object-contain max-h-[50vh] rounded"
                        style={{
                          backgroundImage: "linear-gradient(45deg, #151b26 25%, transparent 25%), linear-gradient(-45deg, #151b26 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #151b26 75%), linear-gradient(-45deg, transparent 75%, #151b26 75%)",
                          backgroundSize: "16px 16px",
                          backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px"
                        }}
                      />
                    </div>
                    <div className="font-mono text-[11px] text-stone-500 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
                      <span>Tên tệp: {activeFile.split("/").pop()}</span>
                      <span>Đường dẫn: /{activeFile}</span>
                    </div>
                  </div>
                </div>
              ) : activeFile && fileContent ? (
                <div className="flex w-full min-h-full">
                  <div className="select-none text-right pr-4 text-stone-600 font-mono text-xs border-r border-stone-900 mr-4 shrink-0">
                    {lines.map((_, i) => (
                      <div key={i} className="leading-5 h-5">
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 overflow-x-auto">
                    <pre className="m-0 p-0 overflow-visible bg-transparent leading-5" style={{ margin: 0, padding: 0 }}>
                      <code
                        ref={codeRef}
                        className={`language-${activeLanguage} text-xs leading-5 block w-full whitespace-pre`}
                      >
                        {fileContent}
                      </code>
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-stone-900 text-stone-500">
                    <Terminal size={22} />
                  </span>
                  <p className="font-mono text-xs text-stone-500">Chọn một tệp từ Explorer để xem mã nguồn.</p>
                </div>
              )}
            </div>

            {activeFile && !isLoading && !error && (
              <div className="flex h-6 items-center justify-between border-t border-stone-900 bg-[#080b10] px-4 font-mono text-[10px] text-stone-500 select-none">
                <div className="flex items-center gap-4">
                  <span>Language: {activeLanguage.toUpperCase()}</span>
                  <span>Size: {getFileSizeString()}</span>
                  <span>Lines: {lines.length}</span>
                </div>
                <div>
                  <span>UTF-8</span>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

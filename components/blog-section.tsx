"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import {
  Search,
  List,
  Grid,
  Twitter,
  Linkedin,
  Facebook,
  PhoneIcon as WhatsApp,
  LinkIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  featured: boolean
  imageUrl: string
  readTime: string
  author: string
}

export default function BlogSection() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Blog posts data
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "The Weibel Instability: A Key to Understanding Cosmic Magnetic Fields",
      excerpt:
        "Exploring how the Weibel instability contributes to magnetic field generation in astrophysical plasmas and its implications for cosmic phenomena.",
      content: `<p>The Weibel instability is a fascinating plasma phenomenon that plays a crucial role in generating magnetic fields in various astrophysical environments. In this post, I'll explore what this instability is, how it works, and why it matters for our understanding of cosmic magnetic fields.</p>
      
      <h3>What is the Weibel Instability?</h3>
      
      <p>Named after physicist Erich S. Weibel who first described it in 1959, the Weibel instability occurs in plasmas with anisotropic velocity distributions. In simpler terms, when particles in a plasma are moving faster in some directions than others, this instability can spontaneously generate magnetic fields.</p>
      
      <p>The basic mechanism works like this:</p>
      <ol>
          <li>Start with a plasma where particles move preferentially in certain directions</li>
          <li>This anisotropy creates current filaments</li>
          <li>These filaments generate magnetic fields</li>
          <li>The magnetic fields cause particles to bunch together even more</li>
          <li>This feedback loop amplifies the magnetic fields</li>
      </ol>
      
      <h3>Astrophysical Significance</h3>
      
      <p>The Weibel instability is particularly important in several cosmic contexts:</p>
      
      <h4>Gamma-Ray Burst Afterglows</h4>
      <p>When the relativistic jets from gamma-ray bursts interact with the surrounding medium, they create shocks where the Weibel instability can generate magnetic fields. These fields are crucial for accelerating particles that produce the afterglow emission we observe.</p>
      
      <h4>Cosmic Ray Acceleration</h4>
      <p>At supernova remnant shocks, the Weibel instability helps create the turbulent magnetic fields needed for diffusive shock acceleration, the process that produces cosmic rays.</p>
      
      <h4>Early Universe Magnetogenesis</h4>
      <p>The Weibel instability might have played a role in generating the seed magnetic fields in the early universe, which later evolved into the fields we observe in galaxies today.</p>
      
      <h3>Computational Challenges</h3>
      
      <p>Simulating the Weibel instability is computationally demanding because it requires resolving both the small scales where the instability operates and the large scales of the astrophysical systems. This is where high-performance computing becomes essential.</p>
      
      <p>My research uses particle-in-cell (PIC) simulations running on GPU clusters to model the Weibel instability in various astrophysical contexts. These simulations track billions of particles and their electromagnetic interactions, requiring petaflops of computing power.</p>
      
      <h3>Recent Breakthroughs</h3>
      
      <p>Recent advances in both computational methods and observational techniques have enhanced our understanding of the Weibel instability:</p>
      
      <ul>
          <li>Laboratory experiments using high-power lasers have successfully created and measured Weibel-generated magnetic fields</li>
          <li>Adaptive mesh refinement techniques have made simulations more efficient</li>
          <li>New theoretical models have connected the microscopic instability to macroscopic astrophysical phenomena</li>
      </ul>
      
      <h3>Future Directions</h3>
      
      <p>Looking ahead, several exciting research directions are emerging:</p>
      
      <ul>
          <li>Connecting Weibel-generated fields to observable radiation signatures</li>
          <li>Understanding the long-term evolution of these magnetic fields</li>
          <li>Exploring the interplay between the Weibel instability and other plasma processes</li>
      </ul>
      
      <p>The Weibel instability reminds us that even in the vast emptiness of space, plasma processes at microscopic scales can have profound effects on cosmic phenomena. By understanding these processes, we gain insight into the magnetized universe around us.</p>`,
      date: "February 15, 2025",
      category: "physics",
      featured: true,
      imageUrl: "/images/GRBs.jpg",
      readTime: "6 min read",
      author: "Nitin Shukla",
    },
    {
      id: 2,
      title: "GPU Programming for Scientific Computing: A Beginner's Guide",
      excerpt:
        "An introduction to GPU programming for scientific applications, covering the basics of CUDA and practical optimization strategies.",
      content: `<p>Graphics Processing Units (GPUs) have revolutionized scientific computing by offering massive parallelism at an affordable price point. In this blog post, I'll introduce you to GPU programming for scientific applications, with a focus on NVIDIA's CUDA platform.</p>
      
      <h3>Why Use GPUs for Scientific Computing?</h3>
      
      <p>The fundamental difference between CPUs and GPUs lies in their architecture:</p>

      <ul>
          <li> CPU: A few powerful cores that handle tasks sequentially.</li>
          <li> GPU: Thousands of smaller cores that can perform many tasks in parallel.</li>
      </ul>

      <img src="/images/CPUGPU.png" alt="GPU vs CPU" class="img-fluid">

      <p> This makes GPUs especially useful for operations that can be split into smaller tasks, such as: </p>

      <ul>
          <li> Matrix multiplications</li>
          <li> Neural network calculations</li>
          <li> Large-scale data processing</li>
      </ul>
      
      <h3> Why GPUs are Great for Scientific Computing </h3>
      <ul>
          <li> Massive Parallelism: GPUs can run thousands of tasks at once, which makes them ideal for processing large datasets.</li>
          <li> High Bandwidth: GPUs can access memory much faster than CPUs, enabling quick data processing.</li>
          <li> Energy Efficiency: Despite consuming more power, GPUs provide significantly more computational power per watt compared to CPUs.</li>
      </ul>

      <h3> How to Program GPUs </h3>
      
      <p> To use a GPU, you need to write code that can run on it. Here are the main options:</p>
      <ul>
          <li> CUDA/HIP: These allow you to write small functions called "kernels" for NVIDIA and AMD GPUs using a language similar to C/C++.</li>
          <li> SYCL: Works across multiple devices like NVIDIA and AMD GPUs, offering flexibility but can be trickier to set up.</li>
          <li> Directives: OpenACC works well with NVIDIA GPUs, while OpenMP offloading is cross-platform.</li>
          <li> Libraries: Pre-built tools like cuBLAS (for math) or PyTorch (for machine learning) use GPUs behind the scenes, saving you time.</li>
      </ul>
      <p> If you are just starting, CUDA is a good place to begin, especially for NVIDIA GPUs.</p>

      <h3> Example: Adding Numbers Using CUDA </h3>

      <p> Here's a simple CUDA example where the task is adding two lists of numbers: </p>

      <pre><code>
      __global__ void addVectors(float* a, float* b, float* c, int n) {
          int i = blockIdx.x * blockDim.x + threadIdx.x;
          if (i < n) {
              c[i] = a[i] + b[i];
          }
      }
      </code></pre>

      <h3> Explanation: </h3>

      <ul>
          <li> __global__: This keyword tells CUDA that this function is a "kernel" that will run on the GPU.</li>
          <li> Thread and Block Indexing: CUDA divides the work into blocks and assigns threads to each block. The blockIdx.x, blockDim.x, and threadIdx.x variables are used to calculate the global index of each thread.</li>
          <li> Parallel Execution: Each thread adds one element from array a to the corresponding element in array b and stores the result in array c.</li>
      </ul>

      <h3> Steps for Running This on a GPU: </h3>

      <ol>
          <li> Allocate memory on the GPU for arrays a, b, and c.</li>
          <li> Copy the input data (a and b) to the GPU.</li>
          <li> Launch the kernel with an appropriate number of blocks and threads.</li>
          <li> Copy the results (c) back to the CPU.</li>
          <li> Free the GPU memory.</li>
      </ol>


      
      <h3>Key Optimization Strategies</h3>
      
      <p>When optimizing CUDA code, consider these essential strategies:</p>
      
      <ol>
          <li><strong>Memory Coalescing:</strong> Ensure that memory access patterns allow threads in a warp to access contiguous memory locations. This significantly improves memory bandwidth utilization.</li>
          <li><strong>Shared Memory Usage:</strong> Leverage shared memory for data that will be accessed multiple times by threads within the same block.</li>
          <li><strong>Occupancy Optimization:</strong> Balance the number of threads per block and registers per thread to maximize GPU occupancy.</li>
          <li><strong>Asynchronous Operations:</strong> Use CUDA streams to overlap computation with data transfers between host and device.</li>
          <li><strong>Kernel Fusion:</strong> Combine multiple small kernels into larger ones to reduce kernel launch overhead.</li>
      </ol>

      <h3> Conclusion</h3>
  
      <p> The real power of GPUs doesn't lie in their raw computational speed but in how efficiently 
      you can move data around and make use of the massive parallelism they offer. When programming GPUs, 
      focus less on flops (the computational power) and more on data delivery. 
      The faster you can get data to the GPU and keep it there, the better your performance will be. </p>
      `,
      date: "January 28, 2025",
      category: "hpc",
      featured: true,
      imageUrl: "/images/A100.jpg",
      readTime: "5 min read",
      author: "Nitin Shukla",
    },
    {
      id: 3,
      title: "Supercomputing in Europe: Current State and Future Directions",
      excerpt:
        "An overview of Europe's high-performance computing landscape, including the latest installations and upcoming projects in the European HPC initiative.",
      content: `<p>An overview of Europe's high-performance computing landscape, including the latest installations and upcoming projects in the European HPC initiative.</p>
      
      <p>
      Supercomputing, also known as High-Performance Computing (HPC), 
      involves using extremely powerful computers to perform complex calculations at lightning speed.
      These machines can process massive amounts of data and run simulations that would take years on a standard computer. 
      Think of them as the heavy lifters of the computing world, tackling tasks like modeling climate systems, simulating the behavior of molecules, or training advanced AI models.
      In this blog, we'll take a look at the current state of supercomputing in Europe and explore where it's heading in the future.
      </p>

      <p>Europe has made significant strides in high-performance computing over the past decade, with several world-class supercomputers now operational across the continent. 
      The European High-Performance Computing Joint Undertaking (EuroHPC JU) has been instrumental in coordinating these efforts.</p>
      
      <h3>Current European Supercomputing Landscape</h3>
      
      <p>Several major systems have recently come online:</p>
      
      <ul>
          <li><strong>LUMI</strong> (Finland): Based on AMD EPYC processors and AMD Instinct accelerators, LUMI delivers over 550 petaflops of peak performance.</li>
          <li><strong>Leonardo</strong> (Italy): Hosted at CINECA, Leonardo combines Intel Xeon processors with NVIDIA A100 GPUs to achieve 250+ petaflops.</li>
          <li><strong>MareNostrum 5</strong> (Spain): The latest iteration of BSC's flagship system features a hybrid architecture with both general-purpose and accelerated partitions.</li>
      </ul>

      <p>
      Currently, Europe has sevral operational supercomputers under the EuroHPC JU: IT4I (Czech Republic), Vega (Slovenia), MeluXina (Luxembourg), and Deucalion (Portugal).
      </p>
      
      <h3>The Path to Exascale</h3>
      
      <p>Europe's exascale ambitions are taking shape with several initiatives:</p>
      
      <ol>
          <li><strong>Jupiter</strong>: Planned for installation at Forschungszentrum Jülich, Jupiter aims to be Europe's first exascale system.</li>
          <li><strong>European Processor Initiative</strong>: This project is developing European processor technology to reduce dependence on non-European hardware.</li>
          <li><strong>Centers of Excellence</strong>: Specialized centers focusing on optimizing applications for next-generation systems.</li>
      </ol>

      
      <h3>Challenges and Opportunities</h3>
      
      <p>Despite impressive progress, several challenges remain:</p>
      
      <ul>
          <li>Energy efficiency concerns as systems grow larger</li>
          <li>Development of programming models that can effectively utilize increasingly heterogeneous architectures</li>
          <li>Training enough skilled personnel to develop and use these systems effectively</li>
      </ul>
      
      <p>These challenges also present opportunities for innovation in system design, programming models, and education.</p>
      
      <h3>Conclusion</h3>
      <p>Europe has come a long way in supercomputing, with powerful machines like JUPITER on the horizon and a clear plan for the future. Initiatives like the EuroHPC JU are driving progress, and efforts to develop homegrown technologies are helping Europe become more self-reliant. However, challenges remain, from catching up with global leaders to making supercomputing more accessible and sustainable.
      </p>
      <p>
      The road ahead is exciting, with plans for post-exascale systems, quantum integration, and a focus on building a complete supercomputing ecosystem. If Europe can continue to invest wisely and foster innovation, it has a real shot at becoming a world leader in supercomputing. But it won't be easy—global competition is fierce, and the stakes are high. Still, with the right strategy, Europe's supercomputing future looks bright.
      </p>`,
      date: "December 18, 2023",
      category: "hpc",
      featured: true,
      imageUrl: "/images/EuroHPC.png",
      readTime: "4 min read",
      author: "Nitin Shukla",
    },
    {
      id: 4,
      title: "GPU Architecture Basics: Understanding the Heart of Modern GPUs",
      excerpt:
        "A detailed look at the architecture of modern GPUs, including key components like CUDA cores, Tensor Cores, and memory hierarchy.",
      content: `<p>
      Modern GPUs are powerhouses of computation, capable of handling massive workloads in parallel.
      But how do they work under the hood? This blog post takes a deep dive into the architecture of modern GPUs, 
      exploring key components like CUDA cores, Tensor Cores, and the memory hierarchy that make them so efficient.
      </p>
      
      <h3>Core Structure</h3>
      
      <p><strong>Streaming Multiprocessors (SMs) / Compute Units (CUs) </strong></p>

      <p>SMs (NVIDIA) or CUs (AMD) are the building blocks of a GPU. Each SM contains:</p>

      <ol>
          <li><strong>CUDA Cores/Stream Processors:</strong> Basic computation units executing arithmetic operations.</li>
          <li><strong>Registers:</strong> Fast memory storage for active threads.</li>
          <li><strong>Shared Memory/L1 Cache:</strong> Low-latency memory shared among cores in an SM.</li>
          <li><strong>Warp Schedulers:</strong> Manage thread execution, dispatching instructions to cores.</li>
      </ol>


      <h3>Memory Hierarchy</h3>
      
      <p>GPUs have a specialized memory system separate from the CPU's main memory, optimized for high-bandwidth access and parallel workloads. The key levels are:</p>

      <ol>
          <li><strong>Global Memory (GDDR/HBM):</strong> High-bandwidth, off-chip memory (e.g., GDDR6, HBM2) for large datasets. HBM offers superior bandwidth via 3D stacking.</li>
          <li><strong>Shared Memory:</strong> On-chip memory for thread collaboration within a block, enabling rapid data sharing.</li>
          <li><strong>Registers:</strong> Per-thread storage offering the fastest access.</li>
          <li><strong>L2 Cache:</strong> Shared across SMs, reducing global memory access latency.</li>
      </ol>

      <img src="/images/gpu-architecture.jpg" alt="GPU Architecture" class="img-fluid">

      <h3>Specialized Compute Units</h3>
      
      <p>Modern GPUs include specialized hardware for specific workloads:</p>

      <ul>
          <li><strong>Tensor Cores:</strong> Accelerate matrix operations for AI/ML workloads, offering 4-8x speedup over standard CUDA cores for matrix multiply-accumulate operations.</li>
          <li><strong>RT Cores:</strong> Dedicated ray tracing hardware for real-time graphics rendering.</li>
          <li><strong>Texture Units:</strong> Specialized for texture filtering and sampling in graphics applications.</li>
      </ul>

      <h3>Thread Execution Model</h3>
      
      <p>GPUs employ a unique execution model:</p>

      <ul>
          <li><strong>SIMT (Single Instruction, Multiple Thread):</strong> Groups of threads (warps/wavefronts) execute the same instruction simultaneously on different data.</li>
          <li><strong>Warps/Wavefronts:</strong> 32 threads (NVIDIA) or 64 threads (AMD) that execute in lockstep.</li>
          <li><strong>Thread Divergence:</strong> Performance penalty when threads in a warp take different execution paths due to conditional statements.</li>
      </ul>

      <h3>Interconnect and Scalability</h3>
      
      <p>High-end GPUs employ sophisticated interconnect technologies:</p>

      <ul>
          <li><strong>NVLink/Infinity Fabric:</strong> High-bandwidth interconnects for multi-GPU configurations.</li>
          <li><strong>PCIe:</strong> Standard interface connecting GPUs to CPUs, with PCIe 4.0/5.0 offering increased bandwidth.</li>
      </ul>

      <h3>Programming Implications</h3>
      
      <p>Understanding GPU architecture helps developers write efficient code:</p>

      <ol>
          <li><strong>Memory Coalescing:</strong> Arranging memory access patterns to maximize bandwidth utilization.</li>
          <li><strong>Occupancy Optimization:</strong> Balancing resource usage to maximize the number of active warps.</li>
          <li><strong>Shared Memory Utilization:</strong> Using shared memory to reduce global memory accesses.</li>
          <li><strong>Warp Efficiency:</strong> Minimizing thread divergence to maintain SIMT efficiency.</li>
      </ol>

      <h3>Recent Architectural Innovations</h3>
      
      <p>The latest GPU architectures introduce several innovations:</p>

      <ul>
          <li><strong>NVIDIA Hopper/Lovelace:</strong> Enhanced Tensor Cores, Thread Block Clusters for improved collaboration, and Transformer Engine for AI workloads.</li>
          <li><strong>AMD RDNA 3/CDNA 2:</strong> Chiplet design, improved Infinity Cache, and enhanced ray tracing capabilities.</li>
          <li><strong>Intel Xe:</strong> Tile-based architecture with scalable designs from integrated to high-performance computing.</li>
      </ul>

      <h3>Conclusion</h3>
      
      <p>GPU architecture represents a fascinating balance between specialized hardware and programmable flexibility. The evolution from graphics-focused devices to general-purpose computing powerhouses has been driven by architectural innovations that maximize parallel processing efficiency.</p>
      
      <p>For scientific computing applications, understanding these architectural details is crucial for achieving optimal performance. As GPUs continue to evolve, we can expect further specialization for key workloads while maintaining the programmability that has made them indispensable for high-performance computing.</p>`,
      date: "November 5, 2024",
      category: "hpc",
      featured: false,
      imageUrl: "/images/gpu-architecture.jpg",
      readTime: "7 min read",
      author: "Nitin Shukla",
    },
    {
      id: 5,
      title: "The Future of High-Performance Computing: Beyond Exascale",
      excerpt:
        "Exploring emerging technologies and paradigms that will shape the next generation of supercomputers after we reach exascale computing.",
      content: `<p>As the high-performance computing (HPC) community approaches the exascale milestone—computers capable of performing a quintillion (10^18) calculations per second—researchers are already looking beyond. What comes after exascale? In this post, I'll explore the technologies and computing paradigms that will likely shape the future of supercomputing.</p>
      
      <h3>The Post-Exascale Landscape</h3>
      
      <p>Exascale computing represents a significant milestone, but it's just one point on the continuum of computational advancement. The post-exascale era will likely be characterized by several key developments:</p>
      
      <h4>Heterogeneous Computing at Extreme Scale</h4>
      
      <p>Future supercomputers will feature increasingly diverse computing elements optimized for specific workloads:</p>
      
      <ul>
          <li><strong>Specialized Accelerators:</strong> Beyond GPUs, we'll see more domain-specific accelerators for AI, graph analytics, and quantum simulation.</li>
          <li><strong>Reconfigurable Computing:</strong> FPGAs and other reconfigurable architectures will allow hardware to adapt to application needs.</li>
          <li><strong>Neuromorphic Elements:</strong> Brain-inspired computing units for pattern recognition and cognitive tasks.</li>
      </ul>
      
      <p>This heterogeneity will require sophisticated runtime systems that can intelligently map application components to the most appropriate hardware.</p>
      
      <h3>Quantum-Classical Hybrid Systems</h3>
      
      <p>While fully fault-tolerant quantum computers remain on the horizon, the integration of quantum processing units (QPUs) with classical HPC systems is already beginning:</p>
      
      <ul>
          <li><strong>Quantum Accelerators:</strong> QPUs will serve as specialized accelerators for problems like molecular simulation and optimization.</li>
          <li><strong>Hybrid Algorithms:</strong> New algorithms that leverage both quantum and classical resources for optimal performance.</li>
          <li><strong>Quantum-Inspired Classical Computing:</strong> Classical algorithms that borrow concepts from quantum computing to achieve better performance.</li>
      </ul>
      
      <p>These hybrid systems will enable new approaches to previously intractable problems in materials science, drug discovery, and complex optimization.</p>`,
      date: "March 10, 2025",
      category: "hpc",
      featured: false,
      imageUrl: "/images/hpc.png",
      readTime: "8 min read",
      author: "Nitin Shukla",
    },
  ])

  // State variables
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [currentPostId, setCurrentPostId] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Initialize filtered posts
  useEffect(() => {
    // Filter posts based on search term and category
    const filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = categoryFilter === "all" || post.category === categoryFilter

      return matchesSearch && matchesCategory
    })

    setFilteredPosts(filtered)
  }, [searchTerm, categoryFilter, blogPosts])

  // Add currentPage reset when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, categoryFilter])

  // Separate useEffect for URL parameter handling
  const openBlogPost = useCallback(
    (postId: number) => {
      const post = blogPosts.find((p) => p.id === postId)
      if (!post) return

      // Only update state if needed
      if (currentPostId !== postId || !isModalOpen) {
        setCurrentPostId(postId)
        setIsModalOpen(true)

        // Update URL with post ID for direct linking
        if (window.location.search !== `?post=${postId}`) {
          router.push(`?post=${postId}`, { scroll: false })
        }

        // Disable body scroll when modal is open
        document.body.style.overflow = "hidden"
      }
    },
    [blogPosts, currentPostId, isModalOpen, router],
  )

  useEffect(() => {
    // Check URL for direct post opening
    const postId = searchParams.get("post")
    if (postId) {
      const id = Number.parseInt(postId)
      if (!isNaN(id)) {
        openBlogPost(id)
      }
    }
  }, [searchParams, openBlogPost])

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  // Close blog post modal
  const closeBlogPost = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"

    // Remove post ID from URL when closing modal
    router.push(window.location.pathname, { scroll: false })
  }

  // Navigate to previous post
  const navigateToPrevPost = useCallback(() => {
    if (!currentPostId) return

    const currentIndex = blogPosts.findIndex((p) => p.id === currentPostId)
    if (currentIndex > 0) {
      openBlogPost(blogPosts[currentIndex - 1].id)
    }
  }, [currentPostId, blogPosts, openBlogPost])

  // Navigate to next post
  const navigateToNextPost = useCallback(() => {
    if (!currentPostId) return

    const currentIndex = blogPosts.findIndex((p) => p.id === currentPostId)
    if (currentIndex < blogPosts.length - 1) {
      openBlogPost(blogPosts[currentIndex + 1].id)
    }
  }, [currentPostId, blogPosts, openBlogPost])

  // Share functions
  const getPostUrl = (postId: number) => {
    return `${window.location.origin}${window.location.pathname}?post=${postId}`
  }

  const shareOnTwitter = (postId: number, title: string) => {
    const url = getPostUrl(postId)
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
    )
  }

  const shareOnLinkedIn = (postId: number) => {
    const url = getPostUrl(postId)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
  }

  const shareOnFacebook = (postId: number) => {
    const url = getPostUrl(postId)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
  }

  const shareOnWhatsApp = (postId: number, title: string) => {
    const url = getPostUrl(postId)
    window.open(`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`, "_blank")
  }

  const copyPostLink = (postId: number) => {
    const url = getPostUrl(postId)
    navigator.clipboard.writeText(url)

    // Show toast notification
    showToast("Link copied to clipboard!")
  }

  // Toast notification
  const [toast, setToast] = useState({ visible: false, message: "" })

  const showToast = (message: string) => {
    setToast({ visible: true, message })
    setTimeout(() => {
      setToast({ visible: false, message: "" })
    }, 3000)
  }

  // Pagination
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({
      top: document.getElementById("blog")?.offsetTop || 0,
      behavior: "smooth",
    })
  }

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  // Get unique categories
  const categoriesSet = new Set(blogPosts.map((post) => post.category))
  const categories = Array.from(categoriesSet)

  // Current post for modal
  const currentPost = blogPosts.find((post) => post.id === currentPostId)
  const currentPostIndex = blogPosts.findIndex((post) => post.id === currentPostId)

  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughts and insights on plasma physics, high-performance computing, and more
          </p>
        </div>

        {/* Blog Controls */}
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <select
                className="w-full p-2 border border-gray-200 rounded-lg"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"}`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`p-2 ${viewMode === "list" ? "bg-gray-100" : "bg-white"}`}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openBlogPost(post.id)}
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="flex flex-col space-y-6">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openBlogPost(post.id)}
              >
                <div className="md:w-1/3 h-48 md:h-auto">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <div className="flex justify-center mt-12">
            <ul className="flex space-x-2">
              {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Blog Post Modal */}
        {isModalOpen && currentPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
              <div className="flex justify-between items-start p-6 border-b">
                <div>
                  <h2 className="text-2xl font-bold">{currentPost.title}</h2>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <span>{currentPost.date}</span>
                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {currentPost.category}
                    </span>
                  </div>
                </div>
                <button onClick={closeBlogPost} className="text-gray-500 hover:text-gray-700" aria-label="Close">
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto p-6 flex-grow">
                <div className="mb-6 h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={currentPost.imageUrl || "/placeholder.svg"}
                    alt={currentPost.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
              </div>

              <div className="border-t p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Share:</span>
                  <button
                    onClick={() => shareOnTwitter(currentPost.id, currentPost.title)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={16} />
                  </button>
                  <button
                    onClick={() => shareOnLinkedIn(currentPost.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </button>
                  <button
                    onClick={() => shareOnFacebook(currentPost.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={16} />
                  </button>
                  <button
                    onClick={() => shareOnWhatsApp(currentPost.id, currentPost.title)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-600"
                    aria-label="Share on WhatsApp"
                  >
                    <WhatsApp size={16} />
                  </button>
                  <button
                    onClick={() => copyPostLink(currentPost.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-600"
                    aria-label="Copy link"
                  >
                    <LinkIcon size={16} />
                  </button>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={navigateToPrevPost}
                    disabled={currentPostIndex === 0}
                    className={`flex items-center px-3 py-2 rounded-md border ${
                      currentPostIndex === 0
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <ChevronLeft size={16} className="mr-1" /> Previous
                  </button>
                  <button
                    onClick={navigateToNextPost}
                    disabled={currentPostIndex === blogPosts.length - 1}
                    className={`flex items-center px-3 py-2 rounded-md border ${
                      currentPostIndex === blogPosts.length - 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Next <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toast.visible && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg z-50">
            {toast.message}
          </div>
        )}

        {/* Floating Share Button */}
        <button
          className="fixed right-6 bottom-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-40"
          onClick={() => {
            const url = window.location.href
            navigator.clipboard.writeText(url)
            showToast("Current page URL copied to clipboard!")
          }}
          aria-label="Share this page"
        >
          <LinkIcon size={20} />
        </button>
      </div>
    </section>
  )
}


import Navbar from "../../components/NavBar"
import Footer from "../../components/Footer"

function CompilerConstruction() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="px-8 pt-40 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-400 uppercase tracking-[0.3em] mb-4">
            Systems Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Compiler Construction Project
          </h1>

          <p className="text-slate-300 text-xl leading-9 max-w-4xl mb-10">
            A multi-stage language translation project built in C, progressing
            from file handling and lexical analysis to recursive descent parsing
            and C code generation.
          </p>

          <div className="flex flex-wrap gap-3">
          

            {[
              "C",
              "Compiler Design",
              "Scanner",
              "Parser",
              "Recursive Descent",
              "Code Generation",
              "File Handling",
            ].map((tech, index) => (
              <span
                key={index}
                className="
                  bg-slate-800
                  text-slate-300
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
              >
                {tech}
              </span>
            ))}
          
          </div>

          <a
            href="https://github.com/jjdeuce06/CompilerConstruction"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-10
              bg-white
              text-black
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              hover:bg-slate-300
              transition
              duration-300
            "
          >
            View GitHub Repository
          </a>

          
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Project Overview</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            This project was completed as part of a Language Translation course
            and focused on building major components of a small compiler using
            structured C programming.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            The project evolved through multiple stages, beginning with modular
            file processing and eventually expanding into scanner development,
            recursive descent parsing, syntax and lexical error reporting, and
            generated C output.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 bg-slate-900">
        <div className="max-w-5xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-12">Development Stages</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">File Processing</h3>
              <p className="text-slate-300 leading-7">
                Built a modular C file handling system to process input,
                output, listing, backup, and temporary files while supporting
                command-line parameters and user prompts.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Scanner</h3>
              <p className="text-slate-300 leading-7">
                Developed a lexical scanner to identify reserved words,
                identifiers, integer literals, operators, punctuation,
                comments, end-of-file markers, and lexical errors.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Recursive Descent Parser
              </h3>
              <p className="text-slate-300 leading-7">
                Implemented grammar productions using recursive descent parsing
                to validate program structure, statements, expressions,
                conditions, loops, and control flow.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Code Generation</h3>
              <p className="text-slate-300 leading-7">
                Extended the parser with action routines to generate C code,
                process identifiers and literals, handle operators, and create
                temporary variables for translated expressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Technical Focus</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            The scanner translated character sequences into tokens such as
            BEGIN, END, READ, WRITE, IF, WHILE, identifiers, integer literals,
            arithmetic operators, relational operators, logical operators, and
            lexical error tokens.
          </p>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            The parser used recursive descent techniques to process a defined
            grammar, including assignment statements, read/write statements,
            if/else blocks, while loops, expressions, terms, factors, and
            conditions.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            The code generation stage translated the parsed source language
            into C code, including generated variable declarations, temporary
            expressions, assignments, and final compiled output structure.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 bg-slate-900">
        <div className="max-w-4xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-8">Challenges</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            One of the biggest challenges was maintaining a clean modular
            structure across multiple C files while keeping scanner, parser,
            file utility, and code generation logic organized.
          </p>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            Another challenge was implementing error handling without simply
            terminating the program, requiring the parser to recover from syntax
            errors and continue scanning until it could resume parsing.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            The project also required careful management of temporary files,
            listing files, generated output files, token buffers, and grammar
            matching throughout the compiler pipeline.
          </p>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Lessons Learned</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            This project strengthened my understanding of how programming
            languages are processed from raw source text into structured tokens,
            parsed grammar rules, and generated executable code.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            It also gave me deeper experience with C programming, modular
            design, file processing, debugging, recursion, grammar design, and
            the internal workflow of compilers.
          </p>

          <div className="flex justify-center mt-12">
            <a
              href="/projects"
              className="border border-slate-700 px-6 py-3 rounded-2xl text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              ← Back to Projects
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CompilerConstruction
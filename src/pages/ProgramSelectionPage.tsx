import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Code2, Play, ArrowRight } from 'lucide-react';
import { PageTransition } from '@shared/components/ui/PageTransition';
import { motion } from 'motion/react';

/* =========================================================
   FULL PROGRAM DATA (same as before, kept in this file)
   ========================================================= */
const mockProgramsByTopic: Record<string, { id: string; number: string; friendlyName: string; description: string }[]> = {
  variables: [
    { id: 'single_variable',    number: '01', friendlyName: 'Create a Single Variable',      description: 'Understand how a computer stores a number in memory using a named variable.' },
    { id: 'multiple_variables', number: '02', friendlyName: 'Create Multiple Variables',      description: 'Understand that the computer reads code line-by-line and can store multiple independent variables.' },
    { id: 'update_variable',    number: '03', friendlyName: 'Update Variable Value',          description: 'Understand that variables can change over time and old values are destroyed when updated.' },
    { id: 'addition',           number: '04', friendlyName: 'Addition Using Variables',       description: 'Learn how to perform addition operations with variables and store the result.' },
    { id: 'subtraction',        number: '05', friendlyName: 'Subtraction Using Variables',    description: 'Learn how to subtract values using variables.' },
    { id: 'multiplication',     number: '06', friendlyName: 'Multiplication Using Variables', description: 'Learn how to multiply values stored in variables.' },
    { id: 'division',           number: '07', friendlyName: 'Division Using Variables',       description: 'Learn how to divide values using variables.' },
    { id: 'circle_area',        number: '08', friendlyName: 'Circle Area Using Variables',    description: 'Learn how to combine variables and numbers to calculate the area of a circle.' },
    { id: 'square_root',        number: '09', friendlyName: 'Square Root Using Variables',    description: 'Learn how to use exponentiation to find the square root.' },
    { id: 'student_result',     number: '10', friendlyName: 'Student Result Calculator',      description: 'Learn how to combine multiple operations to calculate total marks, average, and percentage.' },
    { id: 'square_area',        number: '11', friendlyName: 'Square Area',                    description: 'Learn how to calculate the area of a square using variables.' },
    { id: 'rectangle_area',     number: '12', friendlyName: 'Rectangle Area',                 description: 'Learn how to calculate the area of a rectangle using two variables.' },
    { id: 'temp_conversion',    number: '13', friendlyName: 'Temperature Conversion',         description: 'Learn how to convert temperature from Celsius to Fahrenheit using variables and a formula.' },
  ],
  if_statement: [
    { id: 'positive_number',       number: '01', friendlyName: 'Positive Number Check',             description: 'Learn how to use an if statement to execute code only when a condition is true.' },
    { id: 'divisible_by_5',        number: '02', friendlyName: 'Divisible by 5',                    description: 'Learn how to use the modulo operator (%) in an if condition to check divisibility.' },
    { id: 'voting_eligibility',    number: '03', friendlyName: 'Voting Eligibility',                description: 'Use the greater than or equal to (>=) operator in an if statement.' },
    { id: 'pass_marks',            number: '04', friendlyName: 'Pass Marks Check',                  description: 'Use an if statement to verify a passing threshold condition.' },
    { id: 'square_root_positive',  number: '05', friendlyName: 'Square Root of Positive Number',    description: 'Use an if statement to ensure an operation is only performed on valid inputs.' },
  ],
  if_else: [
    { id: 'even_odd',         number: '01', friendlyName: 'Even or Odd',             description: 'Learn how to use an if-else statement to execute one block for true conditions and another for false.' },
    { id: 'greater_of_two',   number: '02', friendlyName: 'Greater of Two Numbers',  description: 'Use if-else to compare two variables and output the larger one.' },
    { id: 'vowel_consonant',  number: '03', friendlyName: 'Vowel or Consonant',      description: 'Use the "in" keyword within an if-else structure to check if a character is in a group.' },
    { id: 'profit_loss',      number: '04', friendlyName: 'Profit or Loss',          description: 'Use variables representing real-world values in an if-else decision.' },
    { id: 'divisible_by_7',   number: '05', friendlyName: 'Divisible by 7 or Not',  description: 'Use modulo with an if-else to verify exact divisibility.' },
  ],
  if_elif_else: [
    { id: 'largest_of_three',        number: '01', friendlyName: 'Largest of Three Numbers',    description: 'Use if, elif, and else together to check multiple conditions sequentially.' },
    { id: 'grade_calculator',        number: '02', friendlyName: 'Grade Calculator',            description: 'Use multiple elif statements to assign a grade based on numeric scores.' },
    { id: 'positive_negative_zero',  number: '03', friendlyName: 'Positive / Negative / Zero', description: 'Categorize a number into three exact states using if, elif, and else.' },
    { id: 'electricity_bill',        number: '04', friendlyName: 'Electricity Bill Calculator', description: 'Calculate variable costs based on different conditional slabs.' },
    { id: 'income_tax',              number: '05', friendlyName: 'Income Tax Slab',             description: 'Apply tax percentages based on varying income brackets using conditional logic.' },
  ],
  match_case: [
    { id: 'day_name',         number: '01', friendlyName: 'Day Name',                  description: 'Use match-case to cleanly handle multiple specific value conditions.' },
    { id: 'month_name',       number: '02', friendlyName: 'Month Name',                description: 'Use the default case (_) in a match statement to handle invalid inputs.' },
    { id: 'menu_calculator',  number: '03', friendlyName: 'Menu Driven Calculator',    description: 'Use match-case to execute different mathematical operations based on a menu choice.' },
  ],
  for_loop: [
    { id: 'print_1_to_10',                 number: '01', friendlyName: 'Print Numbers (1 to 10)',            description: 'Understand how a for loop iterates over a range of numbers.' },
    { id: 'print_10_to_1',                 number: '02', friendlyName: 'Print Numbers (10 to 1)',            description: 'Learn how to use a negative step in a range function to loop backwards.' },
    { id: 'sum_n_natural',                 number: '03', friendlyName: 'Sum of First N Natural Numbers',     description: 'Understand how to use an accumulator variable inside a loop.' },
    { id: 'factorial',                     number: '04', friendlyName: 'Factorial of a Number',              description: 'Understand how to use an accumulator variable with multiplication.' },
    { id: 'multiplication_table',          number: '05', friendlyName: 'Multiplication Table',               description: 'Learn how to generate a multiplication table using a loop.' },
    { id: 'reverse_multiplication_table',  number: '06', friendlyName: 'Reverse Multiplication Table',       description: 'Learn how to generate a multiplication table backwards.' },
  ],
  while_loop: [
    { id: 'print_1_to_n',      number: '01', friendlyName: 'Print Numbers (1 to N)',  description: 'Understand how a while loop repeats as long as a condition is true.' },
    { id: 'sum_of_digits',     number: '02', friendlyName: 'Sum of Digits',            description: 'Use modulo and integer division in a while loop to process individual digits.' },
    { id: 'reverse_number',    number: '03', friendlyName: 'Reverse a Number',         description: 'Learn to reconstruct a number backwards digit-by-digit using a while loop.' },
    { id: 'count_digits',      number: '04', friendlyName: 'Count Digits',             description: 'Learn how to use a while loop as a simple counter.' },
    { id: 'palindrome_number', number: '05', friendlyName: 'Palindrome Number',        description: 'Learn how to compare modified data against its original state using while loops.' },
    { id: 'armstrong_number',  number: '06', friendlyName: 'Armstrong Number',         description: 'Learn how to process digits and calculate complex sums in a loop.' },
    { id: 'perfect_number',    number: '07', friendlyName: 'Perfect Number Check',     description: 'Learn how to use a while loop to find divisors and check if a number is a Perfect Number.' },
    { id: 'strong_number',     number: '08', friendlyName: 'Strong Number Check',      description: 'Learn how to extract digits and calculate factorial sum to check Strong Number.' },
    { id: 'decimal_to_binary', number: '09', friendlyName: 'Decimal to Binary',        description: 'Learn how to convert decimal to binary using division by 2 in a while loop.' },
    { id: 'binary_to_decimal', number: '10', friendlyName: 'Binary to Decimal',        description: 'Learn how to convert binary to decimal using modulo and powers of 2.' },
    { id: 'factorial',         number: '11', friendlyName: 'Factorial of a Number',    description: 'Learn how to compute the product of numbers from 1 to N using a while loop.' },
  ],
  nested_loop: [
    { id: 'square_star',       number: '01', friendlyName: 'Square Star Pattern',     description: 'Learn the fundamentals of nested loops by generating a grid.' },
    { id: 'right_triangle',    number: '02', friendlyName: 'Right Triangle Pattern',  description: 'Learn how to make the inner loop depend on the outer loop variable.' },
    { id: 'inverted_triangle', number: '03', friendlyName: 'Inverted Triangle Pattern', description: 'Learn how combining a reverse outer loop and dynamic inner loop creates inverted patterns.' },
    { id: 'number_triangle',   number: '04', friendlyName: 'Number Triangle Pattern', description: 'Learn how to use inner loop variables to dynamically generate output values.' },
    { id: 'floyds_triangle',   number: '05', friendlyName: 'Floyds Triangle',         description: 'Learn how to manage independent external state across multiple nested loops.' },
    { id: 'full_pyramid',      number: '06', friendlyName: 'Full Pyramid Star Pattern', description: 'Understand how to use multiple consecutive inner loops inside an outer loop to draw a pyramid.' },
  ],
  loop_control: [
    { id: 'break_statement',    number: '01', friendlyName: 'Break Statement',    description: 'Understand how break terminates the entire loop execution immediately.' },
    { id: 'continue_statement', number: '02', friendlyName: 'Continue Statement', description: 'Understand how continue skips the current iteration and jumps to the next one.' },
    { id: 'pass_statement',     number: '03', friendlyName: 'Pass Statement',     description: 'Understand how pass works as a null statement to prevent syntax errors.' },
    { id: 'prime_number',       number: '04', friendlyName: 'Prime Number Check', description: 'Use loop control variables to check complex conditions like primality.' },
  ],
  functions: [
    { id: 'func_no_args',       number: '01', friendlyName: 'Function Without Arguments',                description: 'Learn how to define a basic function and execute it using a function call.' },
    { id: 'func_with_args',     number: '02', friendlyName: 'Function With Arguments',                   description: 'Learn how to pass data into a function using arguments and parameters.' },
    { id: 'func_with_return',   number: '03', friendlyName: 'Function With Return Value',                description: 'Understand how a function can send computed data back to the calling code.' },
    { id: 'add_using_func',     number: '04', friendlyName: 'Addition Using Function',                   description: 'Learn how to pass variables as arguments and retrieve the computed sum.' },
    { id: 'square_using_func',  number: '05', friendlyName: 'Square of a Number Using Function',         description: 'Learn to encapsulate mathematical logic inside a reusable function.' },
    { id: 'greatest_of_two',    number: '06', friendlyName: 'Greatest of Two Numbers',                   description: 'Combine decision-making logic inside a reusable function.' },
    { id: 'circle_area_func',   number: '07', friendlyName: 'Circle Area Using Function',                description: 'Use functions to perform geometric calculations dynamically based on arguments.' },
    { id: 'simple_interest_func', number: '08', friendlyName: 'Simple Interest Using Function',          description: 'Learn to pass multiple arguments to a function and perform mathematical operations.' },
    { id: 'factorial_func',     number: '09', friendlyName: 'Factorial Using Function',                  description: 'Learn to use loops inside a function to compute a value and return it.' },
    { id: 'even_odd_func',      number: '10', friendlyName: 'Even or Odd Using Function',                description: 'Learn how functions can return different strings based on conditional checks.' },
    { id: 'largest_of_three',   number: '11', friendlyName: 'Largest of Three Numbers Using Function',   description: 'Learn to use if-elif-else statements inside a function and return the correct result.' },
  ],
  recursion: [
    { id: 'recursive_print_n',   number: '01', friendlyName: 'Print Numbers 1 to N',         description: 'Visualize how a recursive function calls itself and builds a call stack.' },
    { id: 'recursive_sum',       number: '02', friendlyName: 'Sum of N Natural Numbers',      description: 'Understand how a recursive function computes values and bubbles them up the call stack.' },
    { id: 'recursive_factorial', number: '03', friendlyName: 'Factorial Using Recursion',     description: 'Observe how recursion mathematically builds up a result.' },
    { id: 'recursive_fibonacci', number: '04', friendlyName: 'Fibonacci Series Using Recursion', description: 'Understand how a function can branch out into multiple recursive calls.' },
    { id: 'recursive_power',     number: '05', friendlyName: 'Power of a Number Using Recursion', description: 'Observe how recursion performs repeated multiplication to compute exponents.' },
  ],
  strings: [
    { id: 'print_string',           number: '01', friendlyName: 'Print a String',                 description: 'Learn how to create and display a basic text string.' },
    { id: 'string_length',          number: '02', friendlyName: 'Find String Length',              description: 'Learn how to use the len() function to count the number of characters in a string.' },
    { id: 'string_upper',           number: '03', friendlyName: 'Convert String to Uppercase',     description: 'Learn how to transform all letters in a string to uppercase.' },
    { id: 'string_lower',           number: '04', friendlyName: 'Convert String to Lowercase',     description: 'Learn how to transform all letters in a string to lowercase.' },
    { id: 'reverse_string',         number: '05', friendlyName: 'Reverse a String',                description: 'Learn how to iterate through a string and build a new string backwards.' },
    { id: 'string_palindrome',      number: '06', friendlyName: 'Palindrome String Check',         description: 'Learn how to compare a string with its reversed version to check for palindromes.' },
    { id: 'count_vowels_consonants',number: '07', friendlyName: 'Count Vowels and Consonants',     description: 'Learn how to process strings character-by-character and classify letters using conditions.' },
    { id: 'count_chars_types',      number: '08', friendlyName: 'Count Digits and Spaces',         description: 'Learn how to use string methods like isdigit() and isspace() to analyze text.' },
    { id: 'string_concat',          number: '09', friendlyName: 'Concatenate Two Strings',         description: 'Learn how to join multiple strings together using the + operator.' },
    { id: 'compare_strings',        number: '10', friendlyName: 'Compare Two Strings',             description: 'Understand how string comparison works and why it is case-sensitive.' },
  ],
  lists: [
    { id: 'basic_list',        number: '01', friendlyName: 'Basic List Operations',             description: 'Learn how to create, access, update, and traverse a Python list.' },
    { id: 'list_stats',        number: '02', friendlyName: 'List Statistics',                   description: 'Learn how to traverse a list to compute sum, average, min, and max values manually.' },
    { id: 'list_search',       number: '03', friendlyName: 'Search Element and Count Occurrences', description: 'Learn how to traverse a list and search for specific elements using conditionals.' },
    { id: 'list_modify',       number: '04', friendlyName: 'Insert and Delete Elements',        description: 'Learn how to add elements to a specific position and remove them using list methods.' },
    { id: 'list_sort_reverse', number: '05', friendlyName: 'Sort and Reverse List',             description: 'Learn how to rearrange list elements using the sort() and reverse() methods.' },
    { id: 'student_marks',     number: '06', friendlyName: 'Student Marks Management',          description: 'Learn to combine iteration, arithmetic and conditionals to process a list of data.' },
  ],
  tuples: [
    { id: 'create_tuple',     number: '01', friendlyName: 'Create and Display Tuple',       description: 'Learn how to create a tuple, print it, and access its elements.' },
    { id: 'tuple_indexing',   number: '02', friendlyName: 'Tuple Indexing and Slicing',     description: 'Understand how to access tuple elements using positive indexes, negative indexes, and slicing.' },
    { id: 'tuple_operations', number: '03', friendlyName: 'Tuple Operations',               description: 'Learn how to use tuple methods like count() and index(), and check membership.' },
  ],
  dictionaries: [
    { id: 'create_dict',    number: '01', friendlyName: 'Create and Access Dictionary',    description: 'Learn how to create a key-value dictionary and access values using their keys.' },
    { id: 'update_dict',    number: '02', friendlyName: 'Update and Delete Dictionary',    description: 'Learn how to modify dictionary values, add new keys, and remove keys using del.' },
    { id: 'traverse_dict',  number: '03', friendlyName: 'Dictionary Traversal',            description: 'Learn how to loop through a dictionary to access keys, values, and key-value pairs.' },
  ],
  searching_sorting: [
    { id: 'linear_search',   number: '01', friendlyName: 'Linear Search',   description: 'Learn how linear search iterates sequentially to find a target.' },
    { id: 'binary_search',   number: '02', friendlyName: 'Binary Search',   description: 'Learn how binary search repeatedly divides a sorted array in half to find a target.' },
    { id: 'bubble_sort',     number: '03', friendlyName: 'Bubble Sort',     description: 'Learn how bubble sort repeatedly steps through the list, compares adjacent elements and swaps them.' },
    { id: 'selection_sort',  number: '04', friendlyName: 'Selection Sort',  description: 'Learn how selection sort finds the minimum element and swaps it to the front.' },
    { id: 'insertion_sort',  number: '05', friendlyName: 'Insertion Sort',  description: 'Learn how insertion sort builds the sorted array one element at a time.' },
  ],
};

/* =========================================================
   PAGE
   ========================================================= */
export const ProgramSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { languageId, topicId } = useParams();
  const programs = topicId && mockProgramsByTopic[topicId] ? mockProgramsByTopic[topicId] : [];
  const topicDisplay = topicId
    ? topicId.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    : 'Programs';

  return (
    <PageTransition className="flex flex-col flex-1 overflow-y-auto w-full">
      <div className="flex flex-col py-10 md:py-14 px-4 max-w-6xl mx-auto w-full min-h-full">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1
            className="text-3xl md:text-4xl font-black mb-2 tracking-tight"
            style={{ color: '#f0f2f8', letterSpacing: '-1px' }}
          >
            {topicDisplay}
          </h1>
          <p style={{ color: '#8b92a8', fontSize: '15px' }}>
            {programs.length} programs — click any to start the visualization.
          </p>
        </motion.div>

        {/* Program Grid */}
        {programs.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center py-16">
              <Code2 className="w-10 h-10 mx-auto mb-4 opacity-20" style={{ color: '#6366f1' }} />
              <p style={{ color: '#525870' }}>No programs found for this topic.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-12">
            {programs.map((prog, index) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Open program ${prog.friendlyName}`}
                  onClick={() => navigate(`/visualizer/${languageId}/${topicId}/${prog.id}`)}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(`/visualizer/${languageId}/${topicId}/${prog.id}`); }}
                  className="flex flex-col min-h-[200px] p-5 rounded-xl transition-all duration-200 group relative overflow-hidden"
                  style={{
                    background: 'rgba(15, 17, 23, 0.70)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(22, 24, 34, 0.88)';
                    el.style.borderColor = 'rgba(99,102,241,0.35)';
                    el.style.transform = 'translateY(-2px) scale(1.01)';
                    el.style.boxShadow = '0 0 0 1px rgba(99,102,241,0.2), 0 8px 32px rgba(0,0,0,0.5)';
                    const arrow = el.querySelector('.arrow-hint') as HTMLElement;
                    if (arrow) arrow.style.opacity = '1';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(15, 17, 23, 0.70)';
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.transform = 'translateY(0) scale(1)';
                    el.style.boxShadow = 'none';
                    const arrow = el.querySelector('.arrow-hint') as HTMLElement;
                    if (arrow) arrow.style.opacity = '0';
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.22)' }}
                      >
                        <Code2 className="w-5 h-5" style={{ color: '#6366f1' }} />
                      </div>
                    </div>

                    {/* Program number badge */}
                    <span
                      className="text-[10px] font-bold shrink-0 px-2.5 py-1 rounded-full font-mono"
                      style={{
                        color: '#8b92a8',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      #{prog.number}
                    </span>
                  </div>

                  {/* Name */}
                  <h2
                    className="font-bold mb-2.5 leading-snug"
                    style={{ color: '#f0f2f8', fontSize: '16px', letterSpacing: '-0.2px' }}
                  >
                    {prog.friendlyName}
                  </h2>

                  {/* Description — fully visible */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: '#8b92a8' }}
                  >
                    {prog.description}
                  </p>

                  {/* Bottom action hint */}
                  <div
                    className="arrow-hint flex items-center gap-2 mt-4 pt-3 transition-opacity duration-150"
                    style={{
                      opacity: 0,
                      borderTop: '1px solid rgba(255,255,255,0.05)',
                      color: '#6366f1',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Start Visualization</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

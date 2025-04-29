# Changelog

All notable changes to this project will be documented in this file.

Added new structure following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

## [1.0.0] - 2025-04-29

### Added 

Major release the 1.0.0 version, a stable version product with important configuration to support ongoing development and new essential features

- Pull request(PR) template
- CHANGELOG.md documentation file
- Path-finding the food using (Manhattan distance) 
- Head-to-head movement detection to avoid collision  
- Configure prittier with code formatting prittier default options 
- Editorconfig for a consistant coding style 
- ESLinting configuration for code quality 

## [0.5.0] - 2025-04-22

### Added 

- ESLint configure in order to ensure a compatible and maintainable BattelSnake behavior by enforcing code quality using 'eslint.config.js' file [#21](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/21).
- Installed ESLint plugins [#22](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/22).
  - eslint-config-prettier to avoid conflicts with Prettier
  - eslint-plugin-sonarjs for code quality checks
  - eslint-plugin-unicorn for better practices and readability
  - eslint-plugin-eslint-comments to enforce best practices for ESLint directive comments
- Lint the whole codebase to run ESLint through all files [#23](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/23).


### Fixed

- ESLint: fixed code syntax by enforcing syntax standardization for quotes and semicolons (['0872f3b'](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/commit/0872f3b337b0d1d64d0a375c7a76accbc2c3264d#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519)).
 

## [0.4.0] - 2025-04-19

### Added 

- Added and configured '.editorconfig' for consistent coding style [#18](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/18).
- Adding and configuring prettier to automatically ensure consistant style applying '.prettierignore' for code formatting with 'package.json' reliences 'package-lock.json' auto-generating with 'package-lock.json'[#19](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/19).
- Default options to make the configure prettier '.prettierignore' enforcing built-in 'prettierrc.json' deafaults [#20](https:// github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/20).


## [0.3.0] - 2025-04-18

### Added 

- Pathfinding the food with Manhattan distance by calculating grid distance assuring that the snake moves towards food and avoides walls successfully 'manhattan-food.js'[#9](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/9).
- Head-to-head movement confirms if heading towards the opponent causes a head-to-head collision by evaluating the position and lenghth of the opponent 'head-to-head-mov.js'[#17](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/17).

- Import the manhatten_food function from file manhatten_food.js to use it in (['index.js'](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/commit/69d9793))


## [0.2.0] - 2025-04-16

### Changed

- The structure of the 'CHANGELOG.md' file is modified into actual documentation.

### Removed

- Unessential documentation parts of the CHANGELOG.md template (['68c7e2c'](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/commit/68c7e2c5bdbe418774f9223a672f527b16c18f83)).


## [0.1.0] - 2025-04-14

### Documentation
- Pull request(PR) templated to repository using .github folder to store the specific file '.github/pull-request-template.md' [#7]
(https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/7).
- CHANGELOG.md file inside the '.documentation/CHANGELOG.md' folder to keep track of updates ([#8](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/8)).
 

### Project Managment
- Created a project board to better visualise and manage tasks ([#6](https://github.com/ichatzivasileiadou/SDiP-Hissssteria/issues/6)).
- Workflow check
  - Iitem added
  - Item closed
  - Auto-add


<!-- Compare Version Releases Links -->

[unreleased]: https://github.com/ichatzivasileiadou/SDiP-Hissssteria/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/ichatzivasileiadou/SDiP-Hissssteria/compare/v0.5.0...v1.0.0
[0.5.0]: https://github.com/ichatzivasileiadou/SDiP-Hissssteria/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/ichatzivasileiadou/SDiP-Hissssteria/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/ichatzivasileiadou/SDiP-Hissssteria/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/ichatzivasileiadou/SDiP-Hissssteria/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/ichatzivasileiadou/SDiP-Hissssteria/releases/tag/v0.1.0

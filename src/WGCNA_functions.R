not_installed <- function(package_name) {
  # Check if a package name is installed or not
  #
  # Args:
  #   package_name: Name of a package
  #   
  # Returns:
  #   The name of a package if not installed or NULL if installed
  answer_boolean = package_name %in% rownames(installed.packages())
  if (answer_boolean) {
    return(NULL)
  } else {
    return(package_name)
  }
}

packages_intallation <- function(package_name) {
  # Intsall the packages needed for WGCNA 
  #
  # Args:
  #   package_name: Name of a package
  #   
  # Returns:
  #   Nothing
  if (package_name == "WGCNA") {
    BiocManager::install(ask = FALSE)
    BiocManager::install("WGCNA",ask = FALSE)
  } else {
    install.packages(package_name, quiet = TRUE, dependencies = "Depends")
  }
}

packages_verification <- function(needed_packages) {
  # Verification of the packages needed to run the script
  #
  # Args:
  #   needed_packages: List of package's name needed
  #   
  # Returns:
  #   Nothing
  to_install = sapply(needed_packages, not_installed)
  to_install[sapply(to_install, is.null)] <- NULL
  invisible(sapply(to_install, packages_intallation))
  #Update all packages
  BiocManager::install(ask = FALSE)
}